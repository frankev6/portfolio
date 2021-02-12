import React from "react";
import "./index.css";

function Button({ children, style, onClick }) {
	return <button onClick={onClick}>{children}</button>;
}

export default Button;
