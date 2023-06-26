import { combineReducers, legacy_createStore } from "redux";
import usersReducer from "../redux/reducers/user_details";

const rootReducer = combineReducers({ 
    userDetail: usersReducer 
});

const configureStore = () => {
    return legacy_createStore(rootReducer);
}

export default configureStore;