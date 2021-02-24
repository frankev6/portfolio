import React from "react";
import Parallax from "../Parallax";
import ToHtml from "../ToHtml";
import "./index.css";

function WorkSections({ currP }) {
	var sections = [];

	var platforms = [];
	var roles = [];
	var deliverables = [];
	var technologies = [];

	currP.platforms.forEach((p) => {
		platforms.push(<p key={platforms.length}>{p}</p>);
	});
	currP.roles.forEach((p) => {
		roles.push(<p key={roles.length}>{p}</p>);
	});
	currP.deliverables.forEach((p) => {
		deliverables.push(<p key={deliverables.length}>{p}</p>);
	});
	currP.technologies.forEach((p) => {
		technologies.push(<p key={technologies.length}>{p}</p>);
	});

	const RolesSection = (
		<Parallax
			fadein={true}
			style={{ display: "flex", justifyContent: "center" }}
		>
			<div className="work-tech-item">
				<p className="work-tech-title">Platforms</p>
				{platforms}
			</div>
			<div className="work-tech-item">
				<p className="work-tech-title">Roles</p>
				{roles}
			</div>
			<div className="work-tech-item">
				<p className="work-tech-title">Deliverables</p>
				{deliverables}
			</div>
			<div className="work-tech-item">
				<p className="work-tech-title">Technologies</p>
				{technologies}
			</div>
		</Parallax>
	);
	currP.sections.forEach((s) => {
		var items = [];
		var imageTop = false;
		var onlyImage = s.title == "";

		if (!onlyImage) {
			items.push(
				<div key={items.length} className="work-item-info">
					<h1 className="medium-text">{s.title}</h1>
					<p className="small-text">{s.description}</p>
				</div>
			);

			if (s.image != "") {
				const image = require(`../../assets/images/${s.image}`).default;

				items.unshift(
					<img src={image} key={items.length} className="work-item-image"></img>
				);
			}
		} else {
			const image = require(`../../assets/images/${s.image}`).default;
			items.push(
				<img
					src={image}
					key={items.length}
					className="work-item-image full-width"
				></img>
			);
		}

		sections.push(
			<div
				key={sections.length}
				className="work-item"
				style={{ display: imageTop ? "block" : "flex" }}
			>
				<Parallax
					fadein={true}
					offset={s.parallax.offset}
					speedY={s.parallax.speedY}
					speedX={s.parallax.speedX}
				>
					{items}
				</Parallax>
			</div>
		);
	});

	return (
		<section className="work-sections">
			{sections[0]}
			{RolesSection}
			{sections.slice(1, sections.length)}
		</section>
	);
}

export default WorkSections;
