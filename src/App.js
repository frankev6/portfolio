import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home";
import Projects from "./containers/Projects";
import Work from "./containers/Work";
import About from "./containers/About";
function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Route component={Home} path="/" exact />
				<Route component={Work} path="/work" />
				<Route component={About} path="/about" />
			</Router>
		</>
	);
}

export default App;
