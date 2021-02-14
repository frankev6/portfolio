import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./containers/Home";

import { ReactComponent as SectionSeparator } from "./assets/section_separator.svg";
function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Home />
				<SectionSeparator
					fill="black"
					style={{
						marginTop: -1,
						transform: "rotate(180deg)",
					}}
				/>
				<div
					style={{
						background: "white",
						height: "40vh",
						marginTop: -10,
					}}
				></div>
			</Router>
		</>
	);
}

export default App;
