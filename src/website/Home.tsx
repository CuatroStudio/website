const Home = () => {
	return <>
		<nav>
			<a href="/">
				<img src="/imago.svg" alt="Cuatro Studio" />
			</a>
		</nav>
		<main>
			<div className="featured">
				<h3>Latest release</h3>
				<div>
					<img src="/tildone.svg" alt="Tildone" />
					<div>
						<a href="tildone">
							<h1>Tildone</h1>
						</a>
						<p>
							Sticky notes on your Mac for stuff you want to have in front of you until you are done.
							As simple as you would do with actual notes.
						</p>
						<a href="https://apps.apple.com/es/app/tildone/id6473126292" target="_blank" rel="noreferrer">
							<img src="/appstore.svg" alt="App Store" id="app-store" />
						</a>
					</div>
				</div>
			</div>
		</main>
	</>
  }
  
  export default Home