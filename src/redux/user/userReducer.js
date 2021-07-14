import fakeData from "../../FakeData";
import { SEARCH_DATA } from "./userTypes";
const usersState = {
	users: fakeData,
	searchedUsers: [],
};

const userReducer = (state = usersState, action) => {
	switch (action.type) {
		case SEARCH_DATA:
			const q = action.query;
			console.log(q);
			const searched = state.users.filter(
				(user) =>
					user.first_name.toLowerCase().includes(q.toLowerCase().trim()) ||
					user.last_name.toLowerCase().includes(q.toLowerCase().trim()) ||
					user.id.toString().includes(q.toLowerCase().trim()) ||
					user.reason.toLowerCase().includes(q.toLowerCase()) ||
					user.money.toString().includes(q.toLowerCase()) ||
					user.date.includes(q.toLowerCase())
			);
			console.log(searched);

			return {
				...state,
				searchedUsers: searched,
			};

		default:
			return state;
	}
};

export default userReducer;
