import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Navbar() {
	return (
		<nav>
			<div className="nav-container">
				<Link to="/">LOGO</Link>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/work">Work</Link>
					</li>
					<li>
						<Link to="/contact">Contact me</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
