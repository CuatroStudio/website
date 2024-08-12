import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import OpenGateway from './opengateway/OpenGateway'
import Callback from './opengateway/Callback'
import Home from './website/Home'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/ogw" element={<OpenGateway />} />
				<Route path="/ogw/*" element={<Callback />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</Router>
	)
}

export default App