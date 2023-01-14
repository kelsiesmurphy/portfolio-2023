import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './containers/About'
import Home from "./containers/Home";
import ErrorPage from "./components/ErrorPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/about" element={ <About /> } />
				<Route path="*" element={ <ErrorPage />} />
			</Routes>
		</Router>
	);
}

export default App;