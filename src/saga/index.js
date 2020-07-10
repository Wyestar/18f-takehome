import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
// const {takeEvery} = ReduxSaga;

import { GET_ALL_POSTS } from '../store/actions/types';
import { FETCH_ALL_POSTS } from '../store/actions/dispatchTypes';


function* sagaAsync() {
	console.error('saga11');
	try {
		console.error('saga22');

// 	const test = { type: 'GET_ALL_POSTS', payload: 'this will be the posts from api2' };
        yield put({ type: 'GET_ALL_POSTS', payload: 'this will be the posts from api2' });
    } catch (error) {
        yield put(getAllPostsError(error));
    }

}

const getAllPostsSuccess = (data) => {
	console.error('saga success: ', data)

    return {
        type: GET_ALL_POSTS,
        payload: data
    }
}

const getAllPostsError = (err) => {
	console.error('saga error')

    return {
        type: GET_ALL_POSTS,
        payload: "there was an error"
    }
}


// function* getAllPostsSaga() {
//     try {
//         const res = yield put("http:localhost:4000/api/all")
//         const posts = yield res.json()
//         console.log('saga posts: ', res.json())
//         yield put(getAllPostsSuccess('testing redux saga'));
//     } catch (error) {
//         yield put(getAllPostsError(error.message));
//     }
// }

export default function* rootSaga() {
    yield takeEvery(FETCH_ALL_POSTS, sagaAsync)
}