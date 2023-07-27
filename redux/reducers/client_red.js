import { CATEGORY_SUBCATE_SELECTION, SECTION_POST_A_JOB } from "../actions/types";

const initialState = {
    cateSubcateSelection: {},
    postJobDetails: {},
};

const clientReducer = (state = initialState, action) => {

    switch(action.type) {
        case CATEGORY_SUBCATE_SELECTION: 
            return {
                ...state,
                cateSubcateSelection: action.payload,
            }
        case SECTION_POST_A_JOB:
            return {
                ...state,
                postJobDetails: action.payload,
            }
        default: 
            return state;
    };
};

export default clientReducer;