import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Callback from './opengateway/Callback'
import Home from './website/Home'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/ogw/*" element={<Callback />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</Router>
	)
}

export default App