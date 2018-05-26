import {SELECT_REALTY} from '../constants';

export const selectRealty = selectedRealty => ({
    type: SELECT_REALTY,
    payload: {selectedRealty}
});