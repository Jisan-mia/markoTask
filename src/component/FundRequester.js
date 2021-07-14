import React from "react";

const FundRequester = ({ user }) => {
	const { first_name, last_name, id, money, reason, date } = user;
	const getFirstLetter = (str) => {
		return str.charAt(0);
	};

	return (
		<tr>
			<td className="user-name-cont">
				<div className="img mr-15">
					{" "}
					{getFirstLetter(first_name)}
					{getFirstLetter(last_name)}{" "}
				</div>
				<div className="name-info">
					<h3>{`${first_name} ${last_name}`}</h3>
					<p>#{id}</p>
				</div>
			</td>

			<td>${money}</td>

			<td>{date}</td>

			<td>{reason}</td>
		</tr>
	);
};

export default FundRequester;
