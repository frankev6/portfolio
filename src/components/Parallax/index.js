import React, { useContext, useRef } from "react";
import { ScrollContext } from "../../containers/AppContext";

function isInViewport(element, offset = 0) {
	const rect = element.getBoundingClientRect();
	return (
		Math.max(0, rect.bottom - offset) <=
		(window.innerHeight || document.documentElement.clientHeight)
	);
}
function calculateDistance(element) {
	const rect = element.getBoundingClientRect();
	return window.innerHeight / 2 - (rect.top + rect.height / 2);
}

function Parallax({
	fadein,
	speedX,
	speedY,
	children,
	style,
	className,
	offset,
}) {
	const scrollY = useContext(ScrollContext);
	const objRef = useRef();
	var translateString = "translate(0,0)";

	if (objRef.current != null) {
		var distance = calculateDistance(objRef.current);
		if (distance < window.innerHeight + 200)
			translateString = `translate(${0.1 * speedX * distance}%,${
				0.1 * speedY * distance
			}%)`;
	}
	return (
		<div
			className={className}
			ref={objRef}
			style={{
				...style,
				transform: translateString,
				opacity: fadein
					? objRef.current == null || isInViewport(objRef.current, offset)
						? 1
						: 0
					: 1,
				transition: fadein
					? "all 300ms ease,transform 0ms linear"
					: "transform 0ms linear",
			}}
		>
			{children}
		</div>
	);
}

export default Parallax;
