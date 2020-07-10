import _ from 'lodash';
import { GET_ALL_POSTS, GET_POSTS } from "../actions/types";
// import postsReducer from "../../../../../react-2020/blog/src/reducers/postsReducer";

const initialState = {};

export const postsReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_ALL_POSTS:
			console.error('reducer hit: ', action.payload);
			const obj = { apiReturn: action.payload }
			return { ...state, ...obj };
			// return { ...state, ..._.mapKeys(action.payload, 'id')};
		case GET_POSTS:
			return state;
		default:
			return state;
	}
}