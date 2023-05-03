import {
    FAIL,
    GET_CONDIDATS,
} from "../actionTypes/condidatTypes";
const initialState = {
    condidats: {},
    errors: [],
    load: true,
};

const condidatsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CONDIDATS:

            return { ...state, condidats: payload.res, load: false };


        case FAIL:
            return { ...state, errors: payload.errors };


        default:
            return state;
    }
};
export default condidatsReducer;
