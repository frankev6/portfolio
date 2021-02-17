import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import "./index.css";
import projects from "../../assets/projects.json";

function Projects() {
	var projectItems = [];

	projects.forEach((p) => {
		projectItems.push(
			<div className="project-item">
				<Link to={"/work/" + p.order}>
					<div
						className="project-image"
						style={{ background: p.accent_color }}
					></div>
					<h1 className="medium-text project-title noselect">{p.title}</h1>
					<p className="project-desc">{p.description}</p>
				</Link>
			</div>
		);
	});

	return <section className="project-container">{projectItems}</section>;
}
export default Projects;
