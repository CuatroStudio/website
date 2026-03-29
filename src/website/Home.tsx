const Home = () => {
	return <>
		<nav>
			<a href="/">
				<img src="/imago.svg" alt="Cuatro Studio" />
			</a>
		</nav>
		<main>
			<div
				className="featured product-box"
				onClick={(event) => {
					if ((event.target as HTMLElement).closest("a")) return
					window.location.href = "better"
				}}
			>
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
						<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
							<a href="https://apps.apple.com/app/better-clipboard/id6756281636" target="_blank" rel="noreferrer">
								<img src="/appstore.svg" alt="App Store" id="app-store" />
							</a>
							<a href="https://www.producthunt.com/products/better-clipboard?embed=true&amp;utm_source=badge-featured&amp;utm_medium=badge&amp;utm_campaign=badge-better-clipboard" target="_blank" rel="noreferrer">
								<img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1088764&amp;theme=light&amp;t=1772549590931" alt="Better&#0032;Clipboard - Smarter&#0032;copy&#0045;paste&#0032;for&#0032;macOS&#0046;&#0032;New&#0032;version&#0033; | Product Hunt" width={184} style={{ maxHeight: 56, marginLeft: 18, marginTop: -8 }} />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div
				className="featured product-box upcoming"
				onClick={(event) => {
					if ((event.target as HTMLElement).closest("a")) return
					window.location.href = "piano"
				}}
			>
				<h3>Coming next</h3>
				<div>
					<img src="/piano/logo.png" alt="Piano Glide" width={120} height={120} />
					<div>
						<a href="piano">
							<h1>Piano Glide</h1>
						</a>
						<p>
							A macOS piano practice studio with falling-note playback, MIDI keyboard input, and a built-in song library for learning pieces with flow.
						</p>
						<span className="product-status">Upcoming product</span>
					</div>
				</div>
			</div>
			<div
				className="featured product-box"
				onClick={(event) => {
					if ((event.target as HTMLElement).closest("a")) return
					window.location.href = "week"
				}}
			>
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
			<div
				className="featured product-box"
				onClick={(event) => {
					if ((event.target as HTMLElement).closest("a")) return
					window.location.href = "tildone"
				}}
			>
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
