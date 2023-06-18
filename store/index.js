import { combineReducers } from "redux";
import { legacy_createStore } from "redux";

import userDetailReducer from "../redux/reducers/user_details";

const rootReducer = combineReducers(
    { userDetail: userDetailReducer }
);

const configureStore = () => {
    return legacy_createStore(rootReducer);
}

export default configureStore;