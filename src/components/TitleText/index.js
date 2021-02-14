import React from "react";

function TitleText({ children, style }) {
	return (
		<h1 className="title-large" style={style}>
			{children}
		</h1>
	);
}

export default TitleText;
