import { useState } from "react";
import {
	FaAddressCard,
	FaRegCreditCard,
	FaRegEnvelopeOpen,
	FaRegUserCircle,
	FaUserCog,
} from "react-icons/fa";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import Hamburger from "./Hamburger";

const Sidebar = () => {
	const [hamburger, setHamburger] = useState(false);
	return (
		<div>
			{/* hamburger component */}
			<Hamburger hamburger={hamburger} setHamburger={setHamburger} />

			<div
				className={`${
					hamburger ? "sidebar sticky hideSide" : "sidebar sticky"
				} `}
			>
				<div className="sidebar__wrapper ">
					<div className=" brand font-2xl-600 centerVertical">
						<img src="/images/logo.png" className="mr-15" alt="" />

						<strong className="">BoltCard</strong>
					</div>

					<div className="editor ">
						<div className="img mr-15">
							<img src="images/editor.jpg" alt="editor" />
						</div>
						<div className="editor-info">
							<p>Administrator</p>
							<h3>Mr. Baakir Qara</h3>
						</div>
					</div>

					<ul className="sidebar__list">
						<li className="listItem active">
							<FaRegEnvelopeOpen className="listItem-icon" />
							Home
						</li>

						<li className="listItem dropdown-container">
							<FaAddressCard className="listItem-icon" />
							<span> Cardholders</span>

							<ul className="nestedList" nestedList>
								<li className="active">Fund Requests</li>
								<li>Card Requests</li>
							</ul>
						</li>
						<li className="listItem">
							<FaRegUserCircle className="listItem-icon" />
							Aggregators
						</li>
						<li className="listItem">
							<FaRegCreditCard className="listItem-icon" />
							Cards Overview
						</li>

						<li className="listItem">
							<FaUserCog className="listItem-icon" />
							User Management
						</li>
						<li className="listItem">
							<RiCheckboxMultipleBlankFill className="listItem-icon" />
							Free Overview
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
