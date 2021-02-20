import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button";
import "./index.css";

function Navbar() {
	const { pathname } = useLocation();
	const [navbar, showNavbar] = useState(false);
	useEffect(() => {
		window.scrollTo(0, 0);
		const navbarBackground = () => {
			showNavbar(window.scrollY >= 200 ? true : false);
		};
		window.addEventListener("scroll", navbarBackground);
		return () => {
			document.removeEventListener("scroll", navbarBackground);
		};
	}, [pathname]);

	return (
		<nav
			className={
				"navbar " +
				(pathname == "/work" || pathname == "/contact"
					? navbar
						? "dark"
						: "light"
					: navbar
					? "dark"
					: "")
			}
		>
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
						<Button
							type={
								pathname == "/work" || pathname == "/contact"
									? navbar
										? "secondary"
										: "primary-outline"
									: navbar
									? "secondary"
									: "secondary-outline"
							}
						>
							Contact Me
						</Button>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
