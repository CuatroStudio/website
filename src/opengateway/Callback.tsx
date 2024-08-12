import { FaRegCopy } from "react-icons/fa6"

const Callback = () => {
	const error: string | null = new URLSearchParams(window.location.search).get('error')
	const errorMessage = new URLSearchParams(window.location.search).get('error_description')
	const code = new URLSearchParams(window.location.search).get('code')
	const state = new URLSearchParams(window.location.search).get('state')

	return <>
		<nav>
			<a href="/">
				<img src="/imago.svg" alt="Cuatro Studio" />
			</a>
		</nav>
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