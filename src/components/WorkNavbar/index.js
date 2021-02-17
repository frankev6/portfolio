import React, { useState, useEffect } from "react";
import Button from "../Button";
import "./index.css";

function WorkNavbar({ color, title, time, live_link, source_link }) {
	const [navbar, showNavbar] = useState(false);

	useEffect(() => {
		const navbarBackground = () => {
			showNavbar(window.scrollY >= 500 ? true : false);
		};
		window.addEventListener("scroll", navbarBackground);
	}, []);

	return (
		<nav
			className={"work-navbar " + (navbar ? "active" : "")}
			style={{ backgroundColor: color }}
		>
			<div className="work-nav-list">
				<div style={{ display: "flex", color: "white", marginTop: -12 }}>
					<h1 style={{ marginRight: 15 }}>{title}</h1>
					<h2>{time}</h2>
				</div>
				<div>
					<a href="#" style={{ marginRight: 15 }}>
						<Button type="secondary" style={{ color: color }}>
							Live Project
						</Button>
					</a>
					<a href="#" style={{ marginRight: 8 }}>
						<Button type="secondary-outline">Source Code</Button>
					</a>
				</div>
			</div>
		</nav>
	);
}

export default WorkNavbar;
