import { 
    USER_DETAILS, 
    PROFILE_DETAILS, 
    CATEGORY_SUBCATE_SELECTION, 
    CURRENT_USER_PROFILE, 
    CURRENT_USER_PROFILE_DETAILS 
} from './types';

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

export function setCurrentUserProfile (userProfile) {
    return {
        type: CURRENT_USER_PROFILE,
        payload: userProfile,
    }
}

export function setCurrentUserProfileDetails (profileDetails) {
    return {
        type: CURRENT_USER_PROFILE_DETAILS,
        payload: profileDetails,
    }
}