import _ from 'lodash';
import { GET_ALL_POSTS, GET_SEARCH_POST, GET_PARTIAL_SEARCH_POST, PUT_POST } from "../actions/types";
// import postsReducer from "../../../../../react-2020/blog/src/reducers/postsReducer";

const initialState = { storeStateTest: 'partial multi post search' };

export const postsReducer = (state = initialState, action) => {
	switch (action.type) {

		case GET_ALL_POSTS:
			console.error('reducer all: ', action.payload);
			// const obj = { allPosts: action.payload };
			// return { ...state, posts: action.payload };
			return Object.assign({}, state, { allPosts: action.payload } );

		case GET_SEARCH_POST:
			// const obj2 = { post: 'this is the post that was searched'}
			console.error('reducer search: ', action.payload);
			// const obj2 = { post: action.payload };
			return Object.assign({}, state, { post: action.payload } );

		case GET_PARTIAL_SEARCH_POST:
			console.error('reducer partial search: ', action.payload);
			return Object.assign({}, state, { matchingPosts: action.payload });

		case PUT_POST:
			console.error('reducer edit test: ', action.payload);
			// find post in store and edit it.
			// return Object.assign({}, state, {})
			return state;

		default:
			return state;
	}
}

// turn json into object with ids as obj keys
// ..._.mapKeys(action.payload, 'id')