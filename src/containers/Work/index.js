import React, { useState } from "react";
import Button from "../../components/Button";
import { useParams } from "react-router-dom";
import "./index.css";
import projects from "../../assets/projects.json";
import Projects from "../Projects";
import WorkNavbar from "../../components/WorkNavbar";
import WorkFooter from "../../components/WorkFooter";
import WorkSections from "../../components/WorkSections";
import Parallax from "../../components/Parallax";

function Work() {
	const { id } = useParams();
	const [InTransition, setInTransition] = useState(false);
	var currP = projects[id];
	if (id == null) {
		return (
			<div>
				<Projects />
			</div>
		);
	} else {
		const image = require(`../../assets/images/${currP.picture}`).default;

		return (
			<div key={currP.order}>
				<WorkNavbar currP={currP} />
				<div
					className="work-hero"
					style={{
						backgroundColor: currP.accent_color,
						overflow: "hidden",
					}}
				>
					<Parallax speedY={0.5} speedX={0} className="work-front">
						<div className="work-title">
							<h1 className="noselect large-text">{currP.title}</h1>
							<h3>{currP.time_taken}</h3>
							<p className="noselect work-description small-text">
								{currP.description}
							</p>

							<div className="work-title-buttons">
								<a href="#">
									<Button
										type="secondary"
										style={{ color: currP.accent_color }}
									>
										Live Project
									</Button>
								</a>
								<a href="#">
									<Button type="secondary-outline">Source Code</Button>
								</a>
							</div>
						</div>
						<img src={image}></img>
					</Parallax>
				</div>
				<div style={{ width: "100%", overflowX: "hidden", marginTop: -60 }}>
					<div className="draw-separator-top"></div>
				</div>
				<div
					className="work-transition-item"
					style={{ opacity: InTransition ? 0 : 1 }}
				>
					<WorkSections currP={currP} />
				</div>
				<WorkFooter
					InTransition={InTransition}
					setInTransition={setInTransition}
					accent_color={
						projects[currP.order < projects.length - 1 ? currP.order + 1 : 0]
							.accent_color
					}
					next_project_link={
						currP.order < projects.length - 1 ? currP.order + 1 : 0
					}
				/>
			</div>
		);
	}
}
export default Work;
