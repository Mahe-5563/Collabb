import { USER_DETAILS, PROFILE_DETAILS, CATEGORY_SUBCATE_SELECTION } from './types';

export function setUserDetails (currentUser) {
    return {
        type: USER_DETAILS,
        payload: currentUser,
    }
}

export function setProfileDetails (profileObj) {
    return {
        type: PROFILE_DETAILS,
        payload: profileObj,
    }
}