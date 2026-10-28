#!/usr/bin/env bash
set -euo pipefail

JWKS_URL="https://www.cuatro.studio/.well-known/jwks.json"
KEY_FILE="./private_key.pem"

# 1. Get the target modulus (hex, lowercase) for each RSA key in the JWKS
targets=$(curl -fsSL "$JWKS_URL" | python3 -c '
import sys, json, base64
data = json.load(sys.stdin)
for k in data["keys"]:
    if k.get("kty") != "RSA":
        continue
    kid = k.get("kid", "<no-kid>")
    n = k["n"] + "=" * (-len(k["n"]) % 4)
    modulus_hex = base64.urlsafe_b64decode(n).hex()
    print(kid + " " + modulus_hex)
')

echo "JWKS keys found:"
echo "$targets"
echo

# 2. Extract the modulus from the private key file and compare
mod_hex=$(openssl rsa -in "$KEY_FILE" -noout -modulus 2>/dev/null | cut -d= -f2 | tr 'A-Z' 'a-z')
if [ -z "$mod_hex" ]; then
    mod_hex=$(openssl pkey -in "$KEY_FILE" -noout -text 2>/dev/null \
        | awk '/modulus/{flag=1; next} /publicExponent/{flag=0} flag' \
        | tr -d ' \n:' | tr 'A-Z' 'a-z')
fi

if [ -z "$mod_hex" ]; then
    echo "[$KEY_FILE] not a readable RSA private key"
    exit 1
fi

match=$(echo "$targets" | grep -i " ${mod_hex}$" || true)
if [ -n "$match" ]; then
    echo "[$KEY_FILE] MATCH -> kid: $(echo "$match" | awk '{print $1}')"
else
    echo "[$KEY_FILE] no match"
fi
