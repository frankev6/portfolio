import React from "react";
import "./index.css";

function Button({ children, style, onClick }) {
	return (
		<button className="btn btn--primary btn-4" style={style} onClick={onClick}>
			<span>{children}</span>
		</button>
	);
}

export default Button;
