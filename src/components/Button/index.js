import React from "react";
import "./index.css";

function Button({ children, type, style, onClick }) {
	return (
		<button
			className={"btn btn-shine-" + type + " btn--" + type}
			style={style}
			onClick={onClick}
		>
			<span>{children}</span>
		</button>
	);
}

export default Button;
