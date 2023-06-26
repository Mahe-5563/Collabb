import { USER_DETAILS, PROFILE_DETAILS } from "../actions/types";

const initialState = {
    userDetail: {},
    profileDetails: {},
}

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case USER_DETAILS: 
            return {
                ...state,
                userDetail: action.payload,
            };
        case PROFILE_DETAILS: 
            return {
                ...state,
                profileDetails: action.payload,
            }
        default:
            return state;
    }
}

export default usersReducer;