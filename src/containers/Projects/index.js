import React, { useState, useRef, useEffect } from "react";
import Button from "../../components/Button";
import "./index.css";
import projects from "../../assets/projects.json";
import DelayLink from "../../components/DelayLink";

function Projects() {
	var projectItems = [];
	const [clickedItem, setItem] = useState(-1);
	const transitionElement = useRef(null);

	useEffect(() => {
		if (clickedItem != -1) {
			transitionElement.current.scrollIntoView({
				behavior: "smooth",
			});
		}
	});

	projects.forEach((p) => {
		var isTransEl = clickedItem == p.order;

		projectItems.push(
			<div
				key={p.order}
				ref={isTransEl ? transitionElement : null}
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
					<div
						className="project-image"
						style={{ background: p.accent_color }}
					></div>
					<h1 className="medium-text project-title noselect">{p.title}</h1>
					<p className="project-desc">{p.description}</p>
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
