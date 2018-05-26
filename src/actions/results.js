import {SET_LISTINGS, RESET_LISTINGS} from '../constants';
import agent from '../agent';
import  { push } from 'react-router-redux';

const setLocations = (listings, totalResults, numPage, totalPages) => ({
    type: SET_LISTINGS,
    payload: {listings, totalResults, numPage, totalPages }
});

  export const getRealtysList = (search, numPage) => dispatch => {
   /*  dispatch(listingsReset()); */
    const res =  agent.getRealtysList(search, numPage)
      .then(setListings => {
        const { listings, total_results: totalResults, total_pages: totalPages } = setListings.response;
        const { location } = setListings.request;
         numPage++; 

        dispatch(setLocations(listings, totalResults, numPage, totalPages));
      })

};

 export const  updateRealtyList = (id, numPage) => {
  getRealtysList(id, numPage); 
}   

export const resetListings = () => ({ type: RESET_LISTINGS });