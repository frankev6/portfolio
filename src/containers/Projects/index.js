import React, { useState } from "react";
import Button from "../../components/Button";
import "./index.css";
import projects from "../../assets/projects.json";
import DelayLink from "../../components/DelayLink";

function Projects() {
	var projectItems = [];
	const [clickedItem, setItem] = useState(-1);

	projects.forEach((p) => {
		var isTransEl = clickedItem == p.order;
		const image = require(`../../assets/images/${p.thumbnail}`).default;

		projectItems.push(
			<div
				key={p.order}
				className={"project-item " + (isTransEl ? "project-transition" : "")}
			>
				<DelayLink
					to={"/work/" + p.order}
					delay={800}
					onDelayEnd={() => window.scrollTo(0, 0)}
					onDelayStart={() => {
						setItem(p.order);
					}}
				>
					<div className="project-image" style={{ background: p.accent_color }}>
						<img src={image}></img>
					</div>
				</DelayLink>
			</div>
		);
	});

	return (
		<section
			className={
				"project-container " +
				(clickedItem != -1 ? "project-section-transition" : "")
			}
		>
			{projectItems}
		</section>
	);
}
export default Projects;
