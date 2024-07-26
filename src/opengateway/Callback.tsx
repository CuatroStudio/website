const Callback = () => {
	const error: string | null = new URLSearchParams(window.location.search).get('error')
	const errorMessage = new URLSearchParams(window.location.search).get('error_description')
	const code = new URLSearchParams(window.location.search).get('code')

	return <>
		<nav>
			<a href="/">
				<img src="/imago.svg" alt="Cuatro Studio" />
			</a>
		</nav>
		<main>
			<div className="featured">
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
							<h1>Code</h1>
							<p>{code}</p>
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