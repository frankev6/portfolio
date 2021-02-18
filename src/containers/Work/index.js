import React from "react";
import Button from "../../components/Button";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import projects from "../../assets/projects.json";
import Projects from "../Projects";
import WorkNavbar from "../../components/WorkNavbar";
import WorkFooter from "../../components/WorkFooter";
import WorkSections from "../../components/WorkSections";

function Work() {
	const { id } = useParams();

	var currP = projects[id];

	if (id == null) {
		return (
			<div>
				<Projects />
			</div>
		);
	} else {
		return (
			<div>
				<WorkNavbar currP={currP} />
				<div
					className="work-hero"
					style={{ backgroundColor: currP.accent_color }}
				>
					<div className="work-title">
						<h1 className="noselect large-text">{currP.title}</h1>
						<h3>{currP.time_taken}</h3>
						<p className="noselect work-description small-text">
							{currP.description}
						</p>

						<div className="work-title-buttons">
							<a href="#" style={{ marginRight: 40 }}>
								<Button type="secondary" style={{ color: currP.accent_color }}>
									Live Project
								</Button>
							</a>
							<a href="#">
								<Button type="secondary-outline">Source Code</Button>
							</a>
						</div>
					</div>
				</div>
				<div style={{ width: "100%", overflowX: "hidden", marginTop: -60 }}>
					<div className="draw-separator-top"></div>
				</div>
				<WorkSections currP={currP} />
				<WorkFooter
					next_project_link={
						currP.order < projects.length - 1 ? currP.order + 1 : 0
					}
				/>
			</div>
		);
	}
}
export default Work;
