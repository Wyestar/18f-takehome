import _ from 'lodash';
import { GET_ALL_POSTS, GET_SEARCH_POST } from "../actions/types";
// import postsReducer from "../../../../../react-2020/blog/src/reducers/postsReducer";

const initialState = { posts: "" };

export const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_POSTS:
			console.error('reducer hit: ', action.payload);
			// const obj = { kjsdfkasjdh: action.payload };
			// return { ...state, posts: action.payload };
			return { ...state, ..._.mapKeys(action.payload, 'id')};
		case GET_SEARCH_POST:
			const obj2 = { post: 'this is the post that was searched'}
			return { ...state, ...obj2 };
		default:
			return state;
	}
}