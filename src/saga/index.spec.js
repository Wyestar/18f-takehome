import { call, select } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';

import { PUT_POST } from '../store/actions/types';

import { axiosAll, getAllPostsSaga, getPartialSearchPostSaga, putPostSaga } from './index';

const mockPosts = {
	postsStore: {
		allPosts: [
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
		]
	}
};

describe('getAllPostsSaga test', () => {
	const it = sagaHelper(getAllPostsSaga());

	it('should get all posts from api first', (result) => {
		expect(result).toEqual(call(axiosAll));
		return mockPosts;
	});

	it('should return an object with all posts', (result) => {
		const { allPosts } = result.payload.action.payload.postsStore;
		expect(allPosts.length).toBe(3);
	});
});

describe('getPartialSearchPostSaga test', (action = { payload: 'title two' }) => {
	const it = sagaHelper(getPartialSearchPostSaga(action));

	it('should get state from store', (result) => {
		expect(result).toEqual(select());
		return mockPosts;
	});

	it('should return posts with titles that partially match input', (result) => {
		const matchingPosts = result.payload.action.payload;
		expect(matchingPosts.length).toBe(2);
	});
});

describe('putPostSaga test', (action = { payload: { id: 3, userId: 2, title: 'three-title-update', body: 'three-body-update' } }) => {
	const it = sagaHelper(putPostSaga(action));

	it('should get state from store', (result) => {
		expect(result).toEqual(select());
		return mockPosts;
	});

	it('should return all posts with updated post', (result) => {
		const allPosts = result.payload.action.payload;

		expect(allPosts[2].title).toBe('three-title-update');
		expect(allPosts[2].body).toBe('three-body-update');
		expect(result.payload.action.type).toBe(PUT_POST);
	});
});