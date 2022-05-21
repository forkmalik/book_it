import {DISPLAY_CLASS, DISPLAY_TYPE} from "./types";

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