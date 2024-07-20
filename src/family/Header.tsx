import { FAMILY_APP_NAME } from "./Family"
import logo from './img/logo.png'

const Header = () => {
	return (
		<nav className="family">
			<a href="/">
				<img src={logo} alt="Family" />
				<h1>{FAMILY_APP_NAME}</h1>
			</a>
		</nav>
	)
}

export default Header