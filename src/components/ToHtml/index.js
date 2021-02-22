import React from "react";

function ToHtml({ style, content }) {
	return (
		<span style={style} dangerouslySetInnerHTML={{ __html: content }}></span>
	);
}

export default ToHtml;
