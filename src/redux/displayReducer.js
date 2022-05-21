import {DISPLAY_CLASS, DISPLAY_TYPE} from "./types";

const initialState = {
    display: "info"
}

export const displayReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_TYPE:
            return {...state, display: action.payload}
        case DISPLAY_CLASS:
            return {...state, display: action.payload}
        default: return state
    }
}