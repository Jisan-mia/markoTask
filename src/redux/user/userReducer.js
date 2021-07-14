import fakeData from "../../FakeData";
import { SEARCH_DATA } from "./userTypes";
const usersState = {
	users: fakeData,
};

const userReducer = (state = usersState, action) => {
	switch (action.type) {
		case SEARCH_DATA:
			console.log(action);
			return {
				...state,
			};

		default:
			return state;
	}
};

export default userReducer;
