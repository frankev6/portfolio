import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Work from "./containers/Work";
import About from "./containers/About";
import Contact from "./containers/Contact";
import AppContext from "./containers/AppContext";

function App() {
	return (
		<>
			<Router>
				<AppContext>
					<Navbar />
					<Switch>
						<Route component={Contact} path="/contact" />
						<Route component={Work} path="/work/:id" />
						<Route component={Work} path="/work" />
						<Route component={About} path="/about" />
						<Route component={Home} path="/" />
					</Switch>
				</AppContext>
			</Router>
		</>
	);
}

export default App;
