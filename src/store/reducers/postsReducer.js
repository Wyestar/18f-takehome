import _ from 'lodash';
import { GET_ALL_POSTS, GET_SEARCH_POST, GET_PARTIAL_SEARCH_POST, PUT_POST } from "../actions/types";

const initialState = {
	allPosts: [],
	matchingPosts: [],
	storeStateTest: 'this does nothing'
};

export const postsReducer = (state = initialState, action) => {
	switch (action.type) {

		case GET_ALL_POSTS:
			console.error('reducer all: ', action.payload);
			return Object.assign({}, state, { allPosts: action.payload } );

		case GET_SEARCH_POST:
			console.error('reducer exact search: ', action.payload);
			return Object.assign({}, state, { exactPost: action.payload } );

		case GET_PARTIAL_SEARCH_POST:
			console.error('reducer partial search: ', action.payload);
			return Object.assign({}, state, { matchingPosts: action.payload });

		case PUT_POST:
			console.error('reducer edit: ', action.payload);
			const storeUpdate = { ...state, allPosts: [ ...state.allPosts.filter(post => post.id !== action.payload.id), {...action.payload} ] };
			return Object.assign({}, state, storeUpdate, {matchingPosts: []});

		default:
			return state;
	}
};
