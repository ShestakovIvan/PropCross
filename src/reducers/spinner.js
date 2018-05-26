 import {SHOW_SPINNER, HIDE_SPINNER} from '../constants';

const initialState = false;

export default function (spinnerState = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SHOW_SPINNER:
            return true;
        case HIDE_SPINNER:
            return false;    
    }
    return spinnerState;
}; 