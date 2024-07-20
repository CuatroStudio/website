import Header from "./Header"

// const PATH: string = '/join/'

const Join = () => {

	// const url: string = window.location.href
	// const uuid: string = url.substring(url.lastIndexOf(PATH) + PATH.length)

	return <>
		<Header />
		<main>
			<div className="featured">
				<h4>You have been invited to join an existing family</h4>
				<p>
					Members:
				</p>
				<div className="button_bar">
					<button className="destructive">Decline</button>
					<button>Accept</button>
				</div>
			</div>
		</main>
	</>
}

export default Join