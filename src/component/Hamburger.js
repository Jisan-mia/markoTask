import React from "react";

const Hamburger = ({ hamburger, setHamburger }) => {
	return (
		<div className="hamburger" onClick={() => setHamburger(!hamburger)}>
			<div className="line"></div>
			<div className="line"></div>
			<div className="line"></div>
		</div>
	);
};

export default Hamburger;
