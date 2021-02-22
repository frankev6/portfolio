import React, { useState, createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
export const ScrollContext = createContext();

function AppContext({ children }) {
	const [scrollY, setScrollY] = useState(0);
	const { pathname } = useLocation();

	useEffect(() => {
		setScrollY(0);
		window.scrollTo(0, 0);
	}, [pathname]);

	useEffect(() => {
		const changeScroll = () => {
			setScrollY(window.scrollY);
			//if (Math.abs(scrollY - window.scrollY) > 0) {
			//}
		};
		window.addEventListener("scroll", changeScroll);
		return () => {
			document.removeEventListener("scroll", changeScroll);
		};
	}, []);

	return (
		<ScrollContext.Provider value={scrollY}>{children}</ScrollContext.Provider>
	);
}

export default AppContext;
