import { combineReducers, legacy_createStore } from "redux";
import usersReducer from "../redux/reducers/user_details";
import clientReducer from "../redux/reducers/client_red";

const rootReducer = combineReducers({ 
    userDetail: usersReducer,
    clientDetails: clientReducer,
});

const configureStore = () => {
    return legacy_createStore(rootReducer);
}

export default configureStore;