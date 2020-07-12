// import { GET_POSTS, GET_ALL_POSTS } from './types';
import { FETCH_ALL_POSTS, FETCH_SEARCH_POST, FETCH_PARTIAL_SEARCH_POST, PATCH_POST } from './dispatchTypes';
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

// not needed, can be on home page
export const getAllPosts = {
    type: FETCH_ALL_POSTS
}

// this is the exact search, to be used in edit form
export const getSearchPost = {
    type: FETCH_SEARCH_POST,
    payload: ""
};

// this is the partial search, to be used on home page
export const getPartialSearchPost = {
    type: FETCH_PARTIAL_SEARCH_POST,
    payload: ""
}

// edit post
export const putPost = {
    type: PATCH_POST,
    payload: ""
}