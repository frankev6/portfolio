import React, { useState, useContext, useEffect } from "react";
import Button from "../Button";
import "./index.css";
import { ScrollContext } from "../../containers/AppContext";

function WorkNavbar({ currP }) {
	const [navbar, showNavbar] = useState(false);

	const scrollY = useContext(ScrollContext);
	useEffect(() => {
		showNavbar(scrollY >= 500 ? true : false);
	}, [scrollY]);
	return (
		<nav
			key="worknav"
			className={"work-navbar " + (navbar ? "active" : "")}
			style={{ backgroundColor: currP.accent_color }}
		>
			<div className="work-nav-list">
				<div style={{ display: "flex", color: "white", marginTop: -8 }}>
					<h3 style={{ marginRight: 15 }}>{currP.title}</h3>
					<h3>{currP.time_taken}</h3>
				</div>
				<div>
					<a
						target="_blank"
						href={currP.live_link}
						style={{ marginRight: 8 }}
						className={currP.live_link != "" ? "" : "disabled"}
					>
						<Button type="secondary" style={{ color: currP.accent_color }}>
							Live Project
						</Button>
					</a>
					<a
						target="_blank"
						href={currP.source_link}
						style={{ marginRight: 8 }}
						className={currP.source_link != "" ? "" : "disabled"}
					>
						<Button type="secondary-outline">Source Code</Button>
					</a>
				</div>
			</div>
		</nav>
	);
}

export default WorkNavbar;
