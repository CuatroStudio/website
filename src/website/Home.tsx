const Home = () => {
	return <>
		<nav>
			<a href="/">
				<img src="/imago.svg" alt="Cuatro Studio" />
			</a>
		</nav>
		<main>
			<div
				className="featured product-box product-detail-card piano-card"
				onClick={(event) => {
					if ((event.target as HTMLElement).closest("a")) return
					window.location.href = "piano"
				}}
			>
				<h3>Latest release</h3>
				<div>
					<img src="/piano/logo.png" alt="Piano Glide" width={120} height={120} />
					<div>
						<a href="piano">
							<h1>Piano Glide</h1>
						</a>
						<h2>Turn your MIDI keyboard into a piano rhythm game.</h2>
						<p>
							A macOS MIDI piano app for playing real songs with falling notes, instant play, and timing, accuracy, and progress feedback.
						</p>
						<ul>
							<li>Real MIDI keyboard practice</li>
							<li>Rhythm-game-like flow</li>
							<li>Free to try, Pro unlock available</li>
						</ul>
						<div className="home-card-cta">
							<a className="primary-cta" href="https://apps.apple.com/es/app/piano-glide/id6761230770" target="_blank" rel="noreferrer">Try Piano Glide Free</a>
							<a className="secondary-cta" href="piano">See how it works</a>
						</div>
					</div>
				</div>
			</div>
			<div
				className="featured product-box product-detail-card"
				onClick={(event) => {
					if ((event.target as HTMLElement).closest("a")) return
					window.location.href = "better"
				}}
			>
				<h3>Discover more</h3>
				<div>
					<img src="/better/logo.png" alt="Better Clipboard" width={120} height={120} />
					<div>
						<a href="better">
							<h1>Better Clipboard</h1>
						</a>
						<h2>Clipboard history made easier to scan, search, and reuse.</h2>
						<p>
							A fast macOS clipboard manager with visual previews, pins, search, and translation where supported by macOS.
						</p>
						<ul>
							<li>Reuse text, links, images, code, and emojis</li>
							<li>Pin important clips and search recent copies</li>
							<li>Translate selected text on supported Macs</li>
						</ul>
						<div className="home-card-cta">
							<a className="primary-cta" href="https://apps.apple.com/app/better-clipboard/id6756281636" target="_blank" rel="noreferrer">Download for Mac</a>
							<a className="secondary-cta" href="better">See features</a>
							<a href="https://www.producthunt.com/products/better-clipboard?embed=true&amp;utm_source=badge-featured&amp;utm_medium=badge&amp;utm_campaign=badge-better-clipboard" target="_blank" rel="noreferrer">
								<img className="product-hunt-badge" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1088764&amp;theme=light&amp;t=1772549590931" alt="Better&#0032;Clipboard - Smarter&#0032;copy&#0045;paste&#0032;for&#0032;macOS&#0046;&#0032;New&#0032;version&#0033; | Product Hunt" width={184} />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div
				className="featured product-box product-detail-card"
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
						<h2>The current ISO week, always where you can see it.</h2>
						<p>
							A lightweight macOS app for people who plan by weeks, with menu bar, Dock, and widget views that update automatically.
						</p>
						<ul>
							<li>ISO week number in the menu bar and Dock</li>
							<li>Widgets for month, week, quarter, and year progress</li>
							<li>Locale and time zone aware on macOS</li>
						</ul>
						<div className="home-card-cta">
							<a className="primary-cta" href="https://apps.apple.com/app/week-number-widgets/id6754349400" target="_blank" rel="noreferrer">Download for Mac</a>
							<a className="secondary-cta" href="week">See widgets</a>
						</div>
					</div>
				</div>
			</div>
			<div
				className="featured product-box product-detail-card"
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
						<h2>Sticky to-do notes that stay visible until the work is done.</h2>
						<p>
							A small macOS task-notes app for keeping lists on your desktop, checking them off, and letting finished notes fade away.
						</p>
						<ul>
							<li>Unlimited sticky notes and task lists</li>
							<li>Colors, transparency, minimization, and keyboard navigation</li>
							<li>Focus Filters support and no data collected</li>
						</ul>
						<div className="home-card-cta">
							<a className="primary-cta" href="https://apps.apple.com/app/tildone/id6473126292" target="_blank" rel="noreferrer">Download for Mac</a>
							<a className="secondary-cta" href="tildone">See release notes</a>
						</div>
					</div>
				</div>
			</div>
		</main>
	</>
  }
  
  export default Home
