import React, { useContext, useRef } from "react";
import { ScrollContext } from "../../containers/AppContext";

function isInViewport(element, offset = 0) {
	const rect = element.getBoundingClientRect();
	return (
		Math.max(0, rect.bottom - offset) <=
		(window.innerHeight || document.documentElement.clientHeight)
	);
}

function Parallax({ fadein, speedX, speedY, children, style, offset }) {
	const scrollY = useContext(ScrollContext);
	const objRef = useRef();
	return (
		<div
			ref={objRef}
			style={{
				...style,
				transform: `translate(${speedX * scrollY}px,${speedY * scrollY}px)`,
				opacity: fadein
					? objRef.current == null || isInViewport(objRef.current, offset)
						? 1
						: 0
					: 1,
				transition: fadein ? "all 300ms ease" : "",
			}}
		>
			{children}
		</div>
	);
}

export default Parallax;
