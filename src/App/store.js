import user from "./reducers/user";
import albums from "./reducers/albums";
import songs from "./reducers/songs";
import {createStore, combineReducers } from "redux";


const store = createStore(
    combineReducers({
        user,
        albums,
        songs 
    })
);

export default store;