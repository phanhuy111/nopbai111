import { FETCH_MUSEUM } from '../constant/museumCon';

const initialState = {
    items: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_MUSEUM:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}