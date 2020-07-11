// import { GET_POSTS, GET_ALL_POSTS } from './types';
import { FETCH_ALL_POSTS, FETCH_SEARCH_POST } from './dispatchTypes';
// import axios from '../../axios/posts';
// import history from '../../history';

// get posts from search
// export const getPosts = (search) => async (dispatch) => {
//     const res = await axios.get('')
// }

// export function getAllPosts() {
//     return {
//         type: FETCH_ALL_POSTS
//     }
// }

export const getAllPosts = {
    type: FETCH_ALL_POSTS
}

// export const getSearchPost = (input) => {
// console.error('action search input: ', input)
//     return {
//         type: FETCH_SEARCH_POST,
//         payload: input
//     }
// }

export const getSearchPost = {
        type: FETCH_SEARCH_POST,
        payload: ""
    };

// export function changeText(value) {
//  type: "CHANGE_TEXT",
//  payload: {text:value},
// }