import React, { useRef, useEffect } from "react";
import Button from "../../components/Button";
import "./index.css";
import DelayLink from "../DelayLink";
import { ReactComponent as ArrowRight } from "../../assets/arrowright.svg";
import { ReactComponent as WaveSeparation } from "../../assets/wave2.svg";
function WorkFooter({
	InTransition,
	setInTransition,
	accent_color,
	next_project_link,
}) {
	return (
		<div className="work-footer">
			<div
				className="work-footer-contact"
				style={{ opacity: InTransition ? 0 : 1 }}
			>
				<h2 className="medium-text noselect" style={{ textAlign: "center" }}>
					Like what you see?
				</h2>
				<DelayLink to="/contact">
					<Button
						type="primary"
						style={{
							display: "block",
							margin: "40px auto",
							padding: "20px 40px 20px 40px",
							fontSize: 20,
						}}
					>
						Contact me
					</Button>
				</DelayLink>
			</div>
			<DelayLink
				to={"/work/" + next_project_link}
				delay={700}
				onDelayStart={() => {
					setInTransition(true);
				}}
				onDelayEnd={() => setInTransition(false)}
			>
				<div
					className="work-footer-btn"
					style={{
						backgroundColor: InTransition ? accent_color : "black",
					}}
				>
					<div
						style={{
							width: "100%",
							overflowX: "hidden",
							marginBottom: -60,
							transform: "rotate(180deg)",
						}}
					>
						<div className="draw-separator-top"></div>
					</div>
					<div
						className="work-footer-nextproject"
						style={{ backgroundColor: InTransition ? accent_color : "black" }}
					>
						<div
							className={
								"work-footer-text " + (InTransition ? "transition" : "")
							}
						>
							<h1 className="noselect large-text">
								Next Project
								<ArrowRight
									fill="white"
									width="3vh"
									style={{ marginLeft: "6vh" }}
								/>
							</h1>
						</div>
					</div>
				</div>
			</DelayLink>
			<div
				className="work-footer-transition"
				style={{
					height: InTransition ? "100vh" : "0",
					backgroundColor: InTransition ? accent_color : "black",
				}}
			></div>
		</div>
	);
}

export default WorkFooter;
