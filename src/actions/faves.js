import {SELECT_FAVES, DELETE_FAVES} from '../constants';

const selectFaves = propertyRealty => ({
    type: SELECT_FAVES,
    payload: {propertyRealty}
});

const deleteFaves = propertyRealty => ({
    type: DELETE_FAVES,
    payload: {propertyRealty}
});

export const toggleFaves = realtyList => (dispatch, getState) => {
    const check = getState().faves.favesArray.some (item => {
        return item.title === realtyList.title;
    });

    if(!check) {
        dispatch(selectFaves(realtyList));
    } else {
        dispatch (deleteFaves(realtyList));   
    }
}


