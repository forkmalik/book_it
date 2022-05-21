import {SELECT_LECTURE, SELECT_PRACTICE} from "./types";

const initialState = {
    classType: ""
}

export const typeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_LECTURE:
            return {...state, classType: action.payload}
        case SELECT_PRACTICE:
            return {...state, classType: action.payload}
        default:
            return initialState
    }
}