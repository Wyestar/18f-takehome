import { postsReducer } from './postsReducer';
import { GET_ALL_POSTS, GET_PARTIAL_SEARCH_POST, PUT_POST } from "../actions/types";

const initialState = {
	allPosts: [],
	matchingPosts: []
};

const mockPosts = [
	{
		userId: 1,
		id: 1,
		title: 'title one',
		body: 'body one',
	},
	{
		userId: 1,
		id: 2,
		title: 'title two',
		body: 'body two'
	},
	{
		userId: 2,
		id: 3,
		title: 'three-t',
		body: 'three-b'
	}
];

describe('postsReducer test', () => {

	it('should return initial state for default', () => {
		expect(postsReducer(initialState, {})).toEqual(initialState);
	});

	it('should return state with all posts for GET_ALL_POSTS', () => {
		const getAllPostsAction = {
			type: GET_ALL_POSTS,
			payload: mockPosts
		};
		const store = postsReducer(initialState, getAllPostsAction);

		expect(store.allPosts).toEqual(mockPosts);
	});

	it('should return state with partial matching post titles for GET_PARTIAL_SEARCH_POST', () => {

		// saga helper sends matched posts to reducer already
		const getPartialSearchPostAction = {
			type: GET_PARTIAL_SEARCH_POST,
			payload: [
				{
					userId: 1,
					id: 1,
					title: 'title one',
					body: 'body one',
				},
				{
					userId: 1,
					id: 2,
					title: 'title two',
					body: 'body two'
				},
			]
		};
		const store = postsReducer(initialState, getPartialSearchPostAction);

		expect(store.matchingPosts).toEqual(getPartialSearchPostAction.payload);
	});

	it('should return state with updated post for PUT_POST', () => {
		const putPostAction = {
			type: PUT_POST,
			payload: mockPosts
		};
		const store = postsReducer(initialState, putPostAction);

		expect(store.allPosts).toEqual(mockPosts);
	});

});