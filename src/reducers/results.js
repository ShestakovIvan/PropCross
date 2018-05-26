import {SET_LISTINGS, RESET_LISTINGS} from '../constants';

const initialState = {
    listings: [],
    totalResults: null,
    numPage: 0,
    totalPages: 0
};

export default function locationsList(listingsState = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case SET_LISTINGS:
       /*  console.log(listingsState.listings); */
            return {
                ...listingsState,
                listings: [...listingsState.listings, ...payload.listings],
                totalResults: payload.totalResults,
                numPage: payload.numPage,
                totalPages: payload.totalPages
            };
         case RESET_LISTINGS:
            return {
                ...listingsState,
                listings: initialState.listings,
                totalResults: initialState.totalResults,
                numPage: initialState.numPage
            };
    }
    return listingsState;
}


/* 
        case RESET_LISTINGS:
            return {
                ...listingsState,
                listings: initialState.listings,
                totalResults: initialState.totalResults,
                numPage: initialState.numPage
            }; */