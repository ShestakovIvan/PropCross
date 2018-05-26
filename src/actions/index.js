import { SET_LOCATIONS, SET_RECENT_SEARCHES, LIST_SEARCH, MAX_SIZE_LOCATION,SHOW_SPINNER, HIDE_SPINNER } from "../constants";
import agent from '../agent';
import  { push } from 'react-router-redux';

const showSpinner = () => {
        type: SHOW_SPINNER
}

const hideSpinner = () => {
        type: HIDE_SPINNER
}

const setLocations = (listings, location, totalResults) => ({
    type: SET_LOCATIONS,
   /*  payload: [list.response.listings, list.response.total_results, list.request.location, list.response.application_response_code] */
   payload: {listings, location, totalResults}
}); 

const listSearch = (location, totalResults) => ({
    type: LIST_SEARCH,
    payload: { location, totalResults}
})

const error = (code) => ({
    type: 'ERROR_CODE',
    payload: { code}
})

 export const getLocations = place => (dispatch, getState) => {
      const title =  agent.getLocation(place)
      .then(data => { 
        const { listings, total_results: totalResults, application_response_code: resCode, page } = data.response;
        const {location} = data.request;
        /* dispatch(hideSpinner()); */


       if(resCode === '101' || resCode === '100' || resCode === '110') 
    {
        const find = (array, value) => array.indexOf(value);
        if(
            find(getState().recList.list, data.request.location)=== -1) {
                dispatch(listSearch(location, totalResults));
         }
        dispatch(setLocations(listings, location, totalResults));
        dispatch(push(`/search/:location=${location}`));
    }  
      if(resCode === '200' || resCode === '202' || resCode === '900') 
    {
        dispatch(error(resCode));
    }   
 }) 
} 

export const getMyLocation = ()  => dispatch => {
    const results = agent.getCoords()
    .then(res => {
        const place = `centre_point=${res}` ;
        const title =  agent.getMyLocations(place)
        .then(data =>  dispatch(getMyLocations(data, dispatch)))
        /* dispatch(showSpinner()); */
    });
}

export const getMyLocations = data => (dispatch, getState) => {
   
      const { listings, total_results: totalResults, application_response_code: resCode } = data.response;
      const {country} = data.request;

     if(resCode === '101' || resCode === '100' || resCode === '110') 
  {
      const find = (array, value) => array.indexOf(value);
      if(
          find(getState().recList.list, data.request.country)=== -1) {
              dispatch(listSearch(country, totalResults));
       }
      dispatch(setLocations(listings, country, totalResults));
      dispatch(push(`/search/:location=${country}`));
  }  
}  

/* export const getLocation = place => (dispatch,getState) => {
    const title =  agent.getLocation(place)
    .then(data => dispatch(getLocations(data, dispatch)))
} */



    

/*  export const getLocations = place => dispatch => {
     const title =  agent.getLocation(place)
     .then(data => dispatch(setLocations(data.response.listings)) )
     
    console.log('title ', title);
   } */
   /*  .then(data => console.log(data.response.listings[0].title)) */
/*    dispatch(setRecentSearches(place)) */
   
/* export const recentSearch = place => dispatch => {
    const recentSearchData =  agent.getLocation(place)
    dispatch(recentSearchArray(place));
   
} */
  /*  .then(data =>dispatch(recentSearchArray(place, data.response.total_results))) */

