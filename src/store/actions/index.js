// import { GET_POSTS, GET_ALL_POSTS } from './types';
import { FETCH_ALL_POSTS } from './dispatchTypes';
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