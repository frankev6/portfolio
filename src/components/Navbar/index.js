import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./index.css";

function Navbar() {
	return (
		<nav className="navbar">
			<ul className="nav-list">
				<li>
					<Link className="nav-link" to="/">
						Home
					</Link>
				</li>
				<li>
					<Link className="nav-link" to="/about">
						About
					</Link>
				</li>
				<li>
					<Link className="nav-link" to="/work">
						Work
					</Link>
				</li>
				<li>
					<Link className="nav-link" to="/contact">
						<Button>Contact Me</Button>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
