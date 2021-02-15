import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import "./index.css";
import projects from "../../assets/projects.json";
import Projects from "../Projects";

function Work() {
	return (
		<div>
			<Projects />
		</div>
	);
}
export default Work;
