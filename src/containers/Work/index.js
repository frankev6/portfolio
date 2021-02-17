import React from "react";
import Button from "../../components/Button";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import projects from "../../assets/projects.json";
import Projects from "../Projects";
import WorkNavbar from "../../components/WorkNavbar";

function Work() {
	const { id } = useParams();

	var currP = projects.find((p) => p.order === parseInt(id));

	if (id == null) {
		return (
			<div>
				<Projects />
			</div>
		);
	} else {
		var sections = [];

		currP.sections.forEach((s) => {
			var items = [];
			var imageTop = false;

			items.push(
				<div className="work-item-info">
					<h1 className="large-text">{s.title}</h1>
					<p className="small-text">{s.description}</p>
				</div>
			);

			if (s.image != "") {
				if (s.image_position == "right") {
					items.push(<div className="work-item-image"></div>);
				} else {
					if (s.image_position == "top") {
						imageTop = true;
					}
					items.unshift(<div className="work-item-image"></div>);
				}
			}

			sections.push(
				<div
					className="work-item"
					style={{ display: imageTop ? "block" : "flex" }}
				>
					{items}
				</div>
			);
		});

		return (
			<div>
				<WorkNavbar
					title={currP.title}
					color={currP.accent_color}
					live_link={currP.live_link}
					source_link={currP.source_link}
					time={currP.time_taken}
				/>
				<div
					className="work-hero"
					style={{ backgroundColor: currP.accent_color }}
				>
					<div className="work-title">
						<h1 className="large-text">{currP.title}</h1>
						<h3>{currP.time_taken}</h3>
						<p className="work-description small-text">{currP.description}</p>

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
				<section className="work-sections">{sections}</section>
			</div>
		);
	}
}
export default Work;
