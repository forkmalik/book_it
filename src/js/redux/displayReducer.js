import {DISPLAY_CALENDAR, DISPLAY_CAMPUS, DISPLAY_CLASS, DISPLAY_CONFIRM, DISPLAY_INFO, DISPLAY_TYPE} from "./types";

const initialState = {
    display: "info"
}

export const displayReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_INFO:
            return {...state, display: action.payload}
        case DISPLAY_CAMPUS:
            return {...state, display: action.payload}
        case DISPLAY_TYPE:
            return {...state, display: action.payload}
        case DISPLAY_CLASS:
            return {...state, display: action.payload}
        case DISPLAY_CALENDAR:
            return {...state, display: action.payload}
        case DISPLAY_CONFIRM:
            return {...state, display: action.payload}
        default: return state
    }
}