import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import "./index.css";
import projects from "../../assets/projects.json";

function Projects() {
	var projectItems = [];

	projects.forEach((p) => {
		projectItems.push(
			<section className="project-section">
				<div className="project-image"></div>
				<h1 className="medium-text project-title noselect">{p.title}</h1>
				<p className="project-desc">{p.description}</p>
			</section>
		);
	});

	return <div className="project-container">{projectItems}</div>;
}
export default Projects;
