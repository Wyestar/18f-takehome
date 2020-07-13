import { all, call, put, takeEvery, takeLatest, spawn, fork, select } from 'redux-saga/effects';
import axios from '../axios/posts';

import { GET_ALL_POSTS, GET_SEARCH_POST, GET_PARTIAL_SEARCH_POST, PUT_POST } from '../store/actions/types';
import { FETCH_ALL_POSTS, FETCH_SEARCH_POST, FETCH_PARTIAL_SEARCH_POST, PATCH_POST } from '../store/actions/dispatchTypes';

const axiosTest = () => {
    return axios.get('http://localhost:4000/api/all')
    .then(res => res.data)
    .catch(err => err)
}

function* getAllPostsSaga() {
	console.error('saga11');

	try {
		console.error('saga22');
        const res = yield call(axiosTest);

        if (res) {
            console.error('saga33: ', res);
            yield put({ type: GET_ALL_POSTS, payload: res });
        }
    } catch (error) {
//         yield put(getAllPostsError(error));
    }

}



// edit form search
// inputted title must be exact match
// {   "userId": 1,
//     "id": 2,
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla" }
function* getSearchPostSaga(action) {
	try {
        const res = yield call(axiosTest);
        if (res) {
            let post = {}
            for (let i = 0; i < res.length; i++) {
                if (res[i].title === action.payload) {
                    post = res[i];
                    break;
                }
            }
            yield put({ type: GET_SEARCH_POST, payload: post });
        }
    } catch (error) {
        yield put({ type: GET_SEARCH_POST, payload: error });
    }
}


// partial search
// home page search, searches for 'matching' titles
function* getPartialSearchPostSaga(action) {
    console.error('partial search start11')
    try {
//         const res = yield call(axiosTest);

        // todo: res = store.allPosts
        const state = yield select();
        console.error('partial search select state: ', state)
        const res = state.postsStore.allPosts;
        if (res) {
    console.error('partial search start22: ', action)

            let input = action.payload.split(" ");
                console.error('partial search start33 - input: ', input)

            let matchingPosts = [];
            for (let i = 0; i < res.length; i++) {
                let title = res[i].title.split(" ");

                 if ( input.some(elem => title.includes(elem)) ) {
                     matchingPosts.push(res[i]);
                 }
            }
            console.error('matching posts from input: ', matchingPosts);

            yield put({ type: GET_PARTIAL_SEARCH_POST, payload: matchingPosts });
        }
    } catch (error) {
    }
}

// edit post in store
function* putPostSaga(action) {
    try {
        console.error('SAGA put post: ', action);
//         body: "est rerum tempore vitae↵sequi sint nihil reprehenderit dolor beatae ea dolores neque↵fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis↵qui aperiam non debitis possimus qui neque nisi nulla"
//         id: 2
//         payload: {}
//         title: "qui est esse321"
//         type: "PATCH_POST"
//         userId: 1
        yield put({ type: PUT_POST, payload: action.payload });
    } catch (error) {
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
