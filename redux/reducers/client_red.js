import { CATEGORY_SUBCATE_SELECTION } from "../actions/types";

const initialState = {
    category_subcate_selection: {}
};

const clientReducer = (state = initialState, action) => {

    switch(action.type) {
        case CATEGORY_SUBCATE_SELECTION: 
            return {
                ...state,
                cateSubcateSelection: action.payload
            }
        default: 
            return state;
    };
};

export default clientReducer;