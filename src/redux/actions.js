import {DISPLAY_CLASS, DISPLAY_TYPE, SELECT_LECTURE, SELECT_PRACTICE} from "./types";

export function displayType() {
    return {
        type: DISPLAY_TYPE,
        payload: "type"
    }
}

export function displayClasses() {
    return {
        type: DISPLAY_CLASS,
        payload: "class"
    }
}



export function selectLecture() {
    return {
        type: SELECT_LECTURE,
        payload: "lecture"
    }
}

export function selectPractice() {
    return {
        type: SELECT_PRACTICE,
        payload: "practice"
    }
}