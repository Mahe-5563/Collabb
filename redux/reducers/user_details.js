import { USER_DETAILS, PROFILE_DETAILS, CURRENT_USER_PROFILE, CURRENT_USER_PROFILE_DETAILS } from "../actions/types";

const initialState = {
    userDetail: {},
    profileDetails: {},
    currentUser: {},
    userProfile: {},
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
        case CURRENT_USER_PROFILE:
            return {
                ...state,
                currentUser: action.payload,
            }
        case CURRENT_USER_PROFILE_DETAILS: 
            return {
                ...state,
                userProfile: action.payload,
            }
        default:
            return state;
    }
}

export default usersReducer;