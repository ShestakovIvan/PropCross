import { SET_LOCATIONS, LIST_SEARCH } from '../constants';

const initialState = {
  listings: [], 
  placeArray: [],
  totalResults: undefined,
  results: [],
  errorList: undefined
};

/* export default (placeState = [], action) => {  */
export default (placeState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOCATIONS:
     return {...placeState, listings: payload.listings, placeArray:[payload.location, ...placeState.placeArray] , totalResults: payload.totalResults};

};
return placeState;
}


//placeState.placeArray.concat([payload.location])
//case SET_RECENT_SEARCHES:
//comments =>comments.concat(randomId))
/* return placeResults => placeResults.concat (payload.placeResults) */
/* return {...placeState, placeResults: payload.place , placeResults: payload.totalResults} */
/*   return  placeState.concat(payload);  */
//recentArray:[payload.recentArray, ...placeState.recentArray]