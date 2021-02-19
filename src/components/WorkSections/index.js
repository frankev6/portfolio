import React from "react";
import "./index.css";

function WorkSections({ currP }) {
	var sections = [];

	currP.sections.forEach((s) => {
		var items = [];
		var imageTop = false;

		items.push(
			<div key={items.length} className="work-item-info">
				<h1 className="large-text">{s.title}</h1>
				<p className="small-text">{s.description}</p>
			</div>
		);

		if (s.image != "") {
			if (s.image_position == "right") {
				items.push(<div key={items.length} className="work-item-image"></div>);
			} else {
				if (s.image_position == "top") {
					imageTop = true;
				}
				items.unshift(
					<div key={items.length} className="work-item-image"></div>
				);
			}
		}

		sections.push(
			<div
				key={sections.length}
				className="work-item"
				style={{ display: imageTop ? "block" : "flex" }}
			>
				{items}
			</div>
		);
	});

	return <section className="work-sections">{sections}</section>;
}

export default WorkSections;
