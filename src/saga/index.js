import { all, call, put, takeEvery, takeLatest, spawn, fork, select } from 'redux-saga/effects';
import axios from '../axios/posts';

import { GET_ALL_POSTS, GET_SEARCH_POST, GET_PARTIAL_SEARCH_POST, PUT_POST } from '../store/actions/types';
import { FETCH_ALL_POSTS, FETCH_SEARCH_POST, FETCH_PARTIAL_SEARCH_POST, PATCH_POST } from '../store/actions/dispatchTypes';

export const axiosAll = () => {
    return axios.get('/api/all')
    .then(res => res.data)
    .catch(err => err)
}

export function* getAllPostsSaga() {
	try {
        const res = yield call(axiosAll);

        yield put({ type: GET_ALL_POSTS, payload: res });
    } catch (error) {
        yield put({ type: GET_ALL_POSTS, payload: error });
    }
}

// for exact title search, not used
export function* getSearchPostSaga(action) {
	try {
        const state = yield select();
        const allPosts = state.postsStore.allPosts;
        let post = {};

        for (let i = 0; i < allPosts.length; i++) {
            if (allPosts[i].title === action.payload) {
                post = allPosts[i];
                break;
            }
        }

        yield put({ type: GET_SEARCH_POST, payload: post });
    } catch (error) {
        yield put({ type: GET_SEARCH_POST, payload: error });
    }
}


// for partial title search
export function* getPartialSearchPostSaga(action) {
    try {
        const state = yield select();
        const allPosts = state.postsStore.allPosts;
        let input = action.payload.split(" ");
        let matchingPosts = [];

        for (let i = 0; i < allPosts.length; i++) {
            let title = allPosts[i].title.split(" ");
             if ( input.some(elem => title.includes(elem)) ) {
                 matchingPosts.push(allPosts[i]);
             }
        }

        yield put({ type: GET_PARTIAL_SEARCH_POST, payload: matchingPosts });
    } catch (error) {
        yield put({ type: GET_PARTIAL_SEARCH_POST, payload: error });
    }
}

// for post edit
export function* putPostSaga(action) {
    try {
        const state = yield select();

        const allPosts = state.postsStore.allPosts;
        const index = allPosts.findIndex(elem => elem.id === action.payload.id);
		allPosts[index] = action.payload;

        yield put({ type: PUT_POST, payload: allPosts });
    } catch (error) {
        yield put({ type: PUT_POST, payload: error });
    }
}

export default function* rootSaga() {
    yield all([
        takeEvery(FETCH_ALL_POSTS, getAllPostsSaga),
        takeEvery(FETCH_SEARCH_POST, getSearchPostSaga),
        takeEvery(FETCH_PARTIAL_SEARCH_POST, getPartialSearchPostSaga),
        takeEvery(PATCH_POST, putPostSaga)
    ])
}
