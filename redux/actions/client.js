import { CATEGORY_SUBCATE_SELECTION, SECTION_POST_A_JOB } from './types';

export function setCategoryAndSubcategory (catSubcat) {
    return {
        type: CATEGORY_SUBCATE_SELECTION,
        payload: catSubcat,
    }
}

export function setPostJobDetails (projectDetails) {
    return {
        type: SECTION_POST_A_JOB,
        payload: projectDetails,
    }
}