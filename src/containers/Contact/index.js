import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import "./index.css";
import { ReactComponent as SectionSeparator } from "../../assets/section_separator2.svg";
function Contact() {
	return (
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
						placeholder="Write something..."
						style={{ height: 200, width: "49vh" }}
					/>
				</div>
				<Button>Send Message</Button>
			</div>
			<div className="contact-divider" />
			<div className="info-container">
				<h1 className="medium-text">Contact Info</h1>
			</div>
		</section>
	);
}
export default Contact;
