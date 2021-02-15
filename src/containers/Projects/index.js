import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import "./index.css";
import projects from "../../assets/projects.json";

function Projects() {
	var projectItems = [];

	projects.forEach((p) => {
		projectItems.push(<div className="">{p.title}</div>);
	});

	return <div className="container">{projectItems}</div>;
}
export default Projects;
