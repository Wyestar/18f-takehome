import { GET_ALL_POSTS, GET_SEARCH_POST, GET_PARTIAL_SEARCH_POST, PUT_POST } from "../actions/types";

const initialState = {
	allPosts: [],
	matchingPosts: []
};

export const postsReducer = (state = initialState, action) => {
	switch (action.type) {

		case GET_ALL_POSTS:
			return Object.assign({}, state, { allPosts: action.payload }, { matchingPosts: [] } );

		case GET_SEARCH_POST:
			return Object.assign({}, state, { exactPost: action.payload } );

		case GET_PARTIAL_SEARCH_POST:
			return Object.assign({}, state, { matchingPosts: action.payload });

		case PUT_POST:
			return Object.assign({}, state, {allPosts: action.payload}, {matchingPosts: []});

		default:
			return state;
	}
};
