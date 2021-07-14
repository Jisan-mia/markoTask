import { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import fakeData from "../FakeData";
import FundRequester from "./FundRequester";

const FundRequests = () => {
	const [users, setUsers] = useState([]);
	const [searchColumns, setSearchColumns] = useState([
		"first_name",
		"last_name",
		"id",
		"money",
		"reason",
		"date",
	]);
	const [searchTerm, setSearchTerm] = useState("");
	useEffect(() => {
		if (searchTerm) {
			const searchR = users.filter((userRow) => {
				return searchColumns.some(
					(column) =>
						userRow[column]
							.toString()
							.toLowerCase()
							.indexOf(searchTerm.toLowerCase()) > -1
				);
			});
			setUsers(searchR);
		} else {
			setUsers(fakeData);
		}
	}, [searchTerm]);

	return (
		<div className="fund-requests ">
			<div className="search-box-1">
				<RiSearchLine className="search-icon font-22px" />
				<input
					type="text "
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="font-16px "
					placeholder="Search"
				/>
			</div>

			<h1>Fund Requests</h1>

			<div className="search-box-2">
				<div className="search-wrapper">
					<RiSearchLine />
					<input
						type="text"
						className="font-12px"
						placeholder="Search"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
				<div className="search-wrapper">
					<select name="" id="">
						<option value="BVN">BVN</option>
					</select>
				</div>
				<button>Search</button>
			</div>

			{/* dynamic fund requested data */}
			<div className="requested-users">
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Amount</th>
							<th>Deadline</th>
							<th>Reason For Request</th>
						</tr>
					</thead>

					<tbody>
						{users.length
							? users.map((user) => <FundRequester key={user.id} user={user} />)
							: "Loading.."}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default FundRequests;
