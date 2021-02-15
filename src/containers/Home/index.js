import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import "./index.css";
import { ReactComponent as ArrowRight } from "../../assets/arrowright.svg";

import { ReactComponent as SectionSeparator } from "../../assets/section_separator.svg";
function Home() {
	var Text1 = "Software Developer";
	var Text2 = "& Graphic Designer";
	var arr1 = [];
	var arr2 = [];
	var delay = 0.2;
	for (var i = 0; i < Text1.length; i++) {
		delay += 0.04;

		var spaceClass = Text1[i] == " " ? "title-letter-space" : "";
		arr1.push(
			<span
				className={"noselect title-letter" + spaceClass}
				style={{ animationDelay: delay.toString() + "s" }}
			>
				{Text1[i]}
			</span>
		);
	}
	for (var i = 0; i < Text2.length; i++) {
		delay += 0.04;

		var spaceClass = Text2[i] == " " ? "title-letter-space" : "";
		arr2.push(
			<span
				className={"noselect title-letter " + spaceClass}
				style={{ animationDelay: delay.toString() + "s" }}
			>
				{Text2[i]}
			</span>
		);
	}

	return (
		<>
			<div className="container">
				<h1 style={{ fontSize: 15, color: "white" }}>
					<span className="noselect">Hi! I'm Frank Elejalde</span>
				</h1>
				<h1 className="large-text">{arr1}</h1>
				<h1 className="large-text">{arr2}</h1>
				<Link to="/work">
					<Button
						style={{
							marginTop: 150,
							padding: 20,
							paddingRight: 25,
						}}
					>
						<div>
							<span style={{ marginBottom: 10, fontSize: 16 }}>
								View my Work
							</span>
							<ArrowRight fill="white" width="9" style={{ marginLeft: 20 }} />
						</div>
					</Button>
				</Link>
			</div>
			<SectionSeparator
				fill="black"
				style={{
					height: 47.4,
					marginTop: -1,
					transform: "rotate(180deg)",
				}}
			/>
		</>
	);
}

export default Home;
