import { all, call, put, takeEvery, takeLatest, spawn, fork } from 'redux-saga/effects';
import axios from '../axios/posts';

import { GET_ALL_POSTS, GET_SEARCH_POST } from '../store/actions/types';
import { FETCH_ALL_POSTS, FETCH_SEARCH_POST } from '../store/actions/dispatchTypes';


// export const createBlaBla = (payload) => {
//   return axios.post('/some-url', payload)
//     .then(response => response)
//     .catch(err => err);
// }
//
// function* createBlaBlaFlow(action) {
//   try {
//     const response = yield call(createBlaBla, action.payload);
//     if (response) {
//       yield put({
//         type: CREATE_BLA_BLA_SUCCESS
//       });
//     }
//   } catch (err) {
//     yield put({
//       type: CREATE_BLA_BLA_FAILURE,
//       payload: 'failed to create bla-bla'
//     });
//   }
// }

const axiosTest = () => {
    return axios.get('http://localhost:4000/api/all')
    .then(res => res)
    .catch(err => err)
}

function* getAllPostsSaga() {
	console.error('saga11');

	try {
		console.error('saga22');
        const res = yield call(axiosTest);

        if (res) {
            console.error('saga33: ', res);
            yield put({ type: GET_ALL_POSTS, payload: res.data });
        }
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


function* getSearchPostSaga(action) {
console.error('search action: ', action);
    yield put({
        type: GET_SEARCH_POST,
        action
    })

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
    yield all([
        takeEvery(FETCH_ALL_POSTS, getAllPostsSaga),
        takeEvery(FETCH_SEARCH_POST, getSearchPostSaga),
    ])
}
