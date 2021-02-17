import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "./index.css";
function Contact() {
	return (
		<div>
			<section className="contact-section">
				<div className="message-container">
					<h1 className="medium-text">Let's Talk</h1>
					<div className="contact-input">
						<div className="small-text">Name</div>
						<input type="text" name="name" />
					</div>
					<div className="contact-input">
						<div className="small-text">Email</div>
						<input type="text" name="email" />
					</div>
					<div className="contact-input">
						<div className="small-text">Message</div>
						<textarea
							type="text"
							name="message"
							style={{ height: 200, width: 425, resize: "none" }}
						/>
					</div>
					<Button type="primary" style={{ margin: "0 auto", display: "block" }}>
						Send Message
					</Button>
				</div>
				<div className="contact-divider-parent">
					<div className="contact-divider" />
				</div>
				<div className="info-container">
					<h1 className="medium-text">Contact Info</h1>
					<div className="contact-link-container">
						<a href="#">
							<div className="contact-link github"></div>
						</a>
						<a href="#">
							<div className="contact-link behance"></div>
						</a>
						<a href="#">
							<div className="contact-link linkedin"></div>
						</a>
					</div>
					<div
						className="small-text"
						style={{ fontWeight: 600, marginTop: 15, textAlign: "center" }}
					>
						frank.ev6@gmail.com
					</div>
				</div>
			</section>
		</div>
	);
}
export default Contact;
