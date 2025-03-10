import fetch from 'node-fetch';

async function fetchJWKS() {
	const url = 'https://cuatro.studio/.well-known/jwks.json';
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const jwks = await response.json();
		console.log(jwks.keys[0].n);
	} catch (error) {
		console.error('Error fetching JWKS:', error);
	}
}

fetchJWKS();