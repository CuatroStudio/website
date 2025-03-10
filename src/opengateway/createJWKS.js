const crypto = require('crypto');
const fs = require('fs');

function generateKeyPair() {
  return crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: { type: 'spki', format: 'pem' },
    privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
  });
}

function createJWK(publicKey) {
  const jwk = crypto.createPublicKey(publicKey).export({ format: 'jwk' });
  jwk.kid = crypto.randomBytes(16).toString('hex');
  jwk.alg = 'RS256';
  jwk.use = 'sig';
  return jwk;
}

const { publicKey, privateKey } = generateKeyPair();
const jwk = createJWK(publicKey);
const jwks = { keys: [jwk] };

fs.writeFileSync('public_key.pem', publicKey);
fs.writeFileSync('private_key.pem', privateKey);
fs.writeFileSync('jwks.json', JSON.stringify(jwks, null, 2));

console.log('Keys and JWKS generated successfully.');
