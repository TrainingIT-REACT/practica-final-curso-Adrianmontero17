import user from "./reducers/user";

import {createStore, combineReducers } from "redux";


const store = createStore(user);

export default store;