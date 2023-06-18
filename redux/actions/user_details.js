// import { USER_DETAILS } from "./types";
import { USER_DETAILS } from '../constants';

export function setUserDetails (currentUser) {
    return {
        type: USER_DETAILS,
        payload: currentUser,
    }
}