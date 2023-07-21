import { CATEGORY_SUBCATE_SELECTION } from './types';

export function setCategoryAndSubcategory (catSubcat) {
    return {
        type: CATEGORY_SUBCATE_SELECTION,
        payload: catSubcat,
    }
}