import React from "react";
import Button from "../../components/Button";
import TitleText from "../../components/TitleText";
import { Link } from "react-router-dom";
import "./index.css";
import { ReactComponent as ArrowRight } from "../../assets/arrowright.svg";

function Home() {
	var Text1 = "Software Developer";
	var Text2 = "& Graphic Designer";
	var arr1 = [];
	var arr2 = [];
	var delay = 0.2;
	for (var i = 0; i < Text1.length; i++) {
		delay += 0.04;
		arr1.push(
			<span
				className="title-letter"
				style={{ animationDelay: delay.toString() + "s" }}
			>
				{Text1[i]}
			</span>
		);
	}
	for (var i = 0; i < Text2.length; i++) {
		delay += 0.04;
		arr2.push(
			<span
				className="title-letter"
				style={{ animationDelay: delay.toString() + "s" }}
			>
				{Text2[i]}
			</span>
		);
	}

	return (
		<div className="container">
			<TitleText style={{ fontSize: 15, color: "white" }}>
				Hi! I'm Frank Elejalde
			</TitleText>
			<TitleText style={{ fontSize: 80, marginBottom: 0, marginTop: 0 }}>
				{arr1}
			</TitleText>
			<TitleText style={{ fontSize: 80, marginTop: 0 }}>{arr2}</TitleText>
			<Link to="/work">
				<Button
					style={{
						marginTop: 90,
						padding: 20,
						paddingRight: 25,
					}}
				>
					<div>
						<span style={{ marginBottom: 10, fontSize: 16 }}>View my Work</span>
						<ArrowRight fill="white" width="9" style={{ marginLeft: 20 }} />
					</div>
				</Button>
			</Link>
		</div>
	);
}

export default Home;
