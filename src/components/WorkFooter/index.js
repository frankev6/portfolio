import React from "react";
import Button from "../../components/Button";
import "./index.css";
import DelayLink from "../DelayLink";
import { ReactComponent as ArrowRight } from "../../assets/arrowright.svg";
function WorkFooter({ next_project_link }) {
	return (
		<div className="work-footer">
			<div className="work-footer-contact">
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
			<DelayLink to={"/work/" + next_project_link}>
				<div className="work-footer-btn">
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
					<div className="work-footer-nextproject">
						<div className="work-footer-text">
							<h1 className="noselect large-text">
								Next Project
								<ArrowRight
									fill="white"
									width="30"
									style={{ marginLeft: 100 }}
								/>
							</h1>
						</div>
					</div>
				</div>
			</DelayLink>
		</div>
	);
}

export default WorkFooter;
