import { USER_DETAILS } from "../constants";

const initialState = {
    userDetail: {},
}

const userDetailReducer = (state = initialState, action) => {

    switch(action.type) {
        case USER_DETAILS: 
            return {
                ...state,
                userDetail: action.payload,
            };
        default:
            return state;
    }
}

export default userDetailReducer;