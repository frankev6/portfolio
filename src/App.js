import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./containers/Home";
import Projects from "./containers/Projects";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Home />
				<Projects />
			</Router>
		</>
	);
}

export default App;
