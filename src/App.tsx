import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Family, { FAMILY_DOMAIN } from './family/Family'
import Join from './family/Join'
import Home from './website/Home'

function App() {
	const isFamily: boolean = window.location.href.indexOf(FAMILY_DOMAIN) > 0
	return (
		<Router>
			<Routes>
				<Route path="/join/*" element={<Join />} />
				<Route path="*" element={isFamily ? <Family /> : <Home />} />
			</Routes>
		</Router>
	)
}

export default App
