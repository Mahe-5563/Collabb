import { USER_DETAILS } from "./types";

export const setUserDetails = currentUser => {
    return {
        type: USER_DETAILS,
        payload: currentUser,
    }
}