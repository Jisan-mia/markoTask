import { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { connect } from "react-redux";
import fakeData from "../FakeData";
import { searchData } from "../redux/user/userActions";
import FundRequester from "./FundRequester";

const FundRequests = ({ searchedUsers, searchData }) => {
	const [users, setUsers] = useState([]);

	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		setUsers(fakeData);
	}, []);

	return (
		<div className="fund-requests ">
			<div className="search-box-1">
				<RiSearchLine className="search-icon font-22px" />
				<input
					type="text "
					value={searchTerm}
					onChange={(e) => {
						setSearchTerm(e.target.value);
						searchData(e.target.value);
					}}
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
						onChange={(e) => {
							setSearchTerm(e.target.value);
							searchData(e.target.value);
						}}
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
						{searchTerm
							? searchedUsers.map((user) => (
									<FundRequester key={user.id} user={user} />
							  ))
							: users.length
							? users.map((user) => <FundRequester key={user.id} user={user} />)
							: "Loading.."}
					</tbody>
				</table>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		searchedUsers: state.searchedUsers,
	};
};

const mapDispatchToProps = {
	searchData: searchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(FundRequests);
