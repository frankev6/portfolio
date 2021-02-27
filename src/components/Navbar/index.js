import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button";
import "./index.css";
import { ScrollContext } from "../../containers/AppContext";

function Navbar() {
	const { pathname } = useLocation();
	const [navbar, showNavbar] = useState(false);
	const [showMenu, setShowMenu] = useState(false);
	const scrollY = useContext(ScrollContext);

	var whiteBackground =
		pathname == "/work" || pathname == "/contact" || pathname == "/about";

	useEffect(() => {
		showNavbar(scrollY >= 80 ? true : false);
	}, [scrollY]);
	useEffect(() => {
		setShowMenu(false);
	}, [pathname]);

	return (
		<nav
			className={
				"navbar " +
				(showMenu == false && whiteBackground
					? navbar
						? "dark"
						: "light"
					: navbar
					? "dark"
					: "")
			}
		>
			<ul className={"nav-list " + (showMenu ? "active" : "")}>
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
								showMenu == false && whiteBackground
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
			<div
				className={
					"nav-bread " + (!navbar && !showMenu && whiteBackground ? "show" : "")
				}
				onClick={() => {
					setShowMenu(!showMenu);
				}}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	);
}

export default Navbar;
