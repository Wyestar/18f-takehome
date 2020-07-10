import { combineReducers } from "redux";
// import { reducer as formReducer } from 'redux-form'

import { postsReducer } from "./postsReducer";

const rootReducer = combineReducers({
	posts: postsReducer
});

export default rootReducer;