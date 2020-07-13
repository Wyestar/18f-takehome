import { FETCH_ALL_POSTS, FETCH_SEARCH_POST, FETCH_PARTIAL_SEARCH_POST, PATCH_POST } from './dispatchTypes';

export const getAllPosts = {
    type: FETCH_ALL_POSTS
}

// exact search
export const getSearchPost = {
    type: FETCH_SEARCH_POST,
    payload: ""
};

// partial search
export const getPartialSearchPost = {
    type: FETCH_PARTIAL_SEARCH_POST,
    payload: ""
}

// post edit
export const putPost = {
    type: PATCH_POST,
    payload: ""
}