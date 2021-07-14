import { SEARCH_DATA } from "./userTypes";

export const searchData = (searchTerm) => {
	return {
		type: SEARCH_DATA,
		query: searchTerm,
	};
};
