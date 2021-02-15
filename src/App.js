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
				<div
					style={{
						background: "white",
						height: "40vh",
						marginTop: -10,
					}}
				></div>
				<Projects />
			</Router>
		</>
	);
}

export default App;
