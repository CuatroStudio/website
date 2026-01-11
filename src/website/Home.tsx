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
					<img src="/better/logo.png" alt="Better Clipboard" width={120} height={120} />
					<div>
						<a href="better">
							<h1>Better Clipboard</h1>
						</a>
						<p>
							Clipboard history with pins, previews, and fast search in a floating menu bar window for macOS.
						</p>
						<a href="https://apps.apple.com/app/better-clipboard/id6756281636" target="_blank" rel="noreferrer">
							<img src="/appstore.svg" alt="App Store" id="app-store" />
						</a>
					</div>
				</div>
			</div>
			<div className="featured">
				<h3>Discover more</h3>
				<div>
					<img src="/week/logo.png" alt="Week Number" width={120} height={120} />
					<div>
						<a href="week">
							<h1>Week Number</h1>
						</a>
						<p>
							Never guess the week again. See the current week number with three clean widgets to choose from—perfect for sprints, schedules, deadlines, and everything in between
						</p>
						<a href="https://apps.apple.com/app/week-number-widgets/id6754349400" target="_blank" rel="noreferrer">
							<img src="/appstore.svg" alt="App Store" id="app-store" />
						</a>
					</div>
				</div>
			</div>
			<div className="featured">
				<h3>Discover more</h3>
				<div>
					<img src="/tildone.svg" alt="Tildone" width={120} height={120} />
					<div>
						<a href="tildone">
							<h1>Tildone</h1>
						</a>
						<p>
							Sticky notes on your Mac for stuff you want to have in front of you until you are done.
							As simple as you would do with actual notes.
						</p>
						<a href="https://apps.apple.com/app/tildone/id6473126292" target="_blank" rel="noreferrer">
							<img src="/appstore.svg" alt="App Store" id="app-store" />
						</a>
					</div>
				</div>
			</div>
		</main>
	</>
  }
  
  export default Home
