import { FETCH_ALL_POSTS, FETCH_SEARCH_POST, FETCH_PARTIAL_SEARCH_POST, PATCH_POST } from './dispatchTypes';

export const getAllPosts = {
    type: FETCH_ALL_POSTS
}

// exact search for single post, not used
export const getSearchPost = {
    type: FETCH_SEARCH_POST,
    payload: ""
};

// partial search for multiple posts
export const getPartialSearchPost = {
    type: FETCH_PARTIAL_SEARCH_POST,
    payload: ""
}

export const putPost = {
    type: PATCH_POST,
    payload: null
}