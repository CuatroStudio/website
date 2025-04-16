import { FaRegCopy } from "react-icons/fa6"

const Callback = () => {
	const error: string | null = new URLSearchParams(window.location.search).get('error')
	const errorMessage = new URLSearchParams(window.location.search).get('error_description')
	const code = new URLSearchParams(window.location.search).get('code')
	const state = new URLSearchParams(window.location.search).get('state')
	try {
		if (state) {
			const decodedState = JSON.parse(atob(state))
			if (decodedState) {
				const queryString = window.location.search
				window.location.href = `http://localhost:3000/callback${queryString}`
			}
		}
	} catch (error) {
		console.error("Failed to decode or parse state:", error)
	}
	return <>
		{/* <nav>
			<a href="/">
				<img src="/imago.svg" alt="Cuatro Studio" />
			</a>
		</nav> */}
		<main>
			<div className="featured ogw">
				{error &&
					<div>
						<div>
							<h1>Error</h1>
							<p>{errorMessage}</p>
						</div>
					</div>
				}
				{code &&
					<div>
						<div>
							<h1>Open Gateway</h1>
							<h3>Auth Code Flow callback result</h3>
							<div className="copy_bundle">
								<p>Code: {code}</p>
								<FaRegCopy
									onClick={() => navigator.clipboard.writeText(code || '')}
									style={{ margin: 16, cursor: 'pointer' }}
								/>
							</div>
							<div className="copy_bundle">
								<p>State: {state}</p>
								<FaRegCopy
									onClick={() => navigator.clipboard.writeText(state || '')}
									style={{ margin: 16, cursor: 'pointer' }}
								/>
							</div>
							<br />
							<br />
							What to do next?
							<br />
							<ul>
								<li>This URI is supposed to be listened on your backend (your <code>redirect_uri</code>), where you will take the code and request a token to authenticate your Open Gateway API calls</li>
								<li>If you want to continue with your tests manually, you can use the Postman collection bellow and paste the obtained code in the following request's body <code>code</code> key: Authorization (OIDC) &gt; Auth Code (Frontend) &gt; 2nd Get access token</li>
							</ul>
							Resources:
							<br />
							<small>Save as files with .json extension and import them from Postman</small>
							<ul>
								<li><a
									href="https://bxbucket.blob.core.windows.net/bxbucket/opengateway-web/uploads/OpenGateway.postman_collection.json"
									download="OpenGateway.postman_collection.json"
									target="_blank"
									rel="noreferrer"
								>
									Open Gateway APIs Postman collection
								</a></li>
								<li><a
									href="https://bxbucket.blob.core.windows.net/bxbucket/opengateway-web/uploads/OpenGatewaySandbox.postman_environment.json"
									download="OpenGatewaySandbox.postman_environment.json"
									target="_blank"
									rel="noreferrer"
								>
									Open Gateway Sandbox Postman environment
								</a></li>
							</ul>
						</div>
					</div>
				}
				{!error && !code &&
					<div>
						<div>
							<h1>Callback</h1>
							<p>Something went wrong</p>
						</div>
					</div>
				}
			</div>
		</main>
	</>	
}

export default Callback