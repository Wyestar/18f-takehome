import { combineReducers } from "redux";

import { postsReducer } from "./postsReducer";

const rootReducer = combineReducers({
	postsStore: postsReducer
});

export default rootReducer;