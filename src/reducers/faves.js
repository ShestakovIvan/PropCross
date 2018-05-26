import { SELECT_FAVES, DELETE_FAVES } from '../constants';

const favesInitState = {
    favesArray: []
  }
  export default (favesState = favesInitState, action) => {
    const { type, payload } = action;
    switch (type) {
  case SELECT_FAVES: 
  console.log(payload.propertyRealty.title)
  return {...favesState, favesArray: [payload.propertyRealty, ...favesState.favesArray]};
  case DELETE_FAVES:
  
        return{...favesState, favesArray:favesState.favesArray.filter(el => el.title !== payload.propertyRealty.title),} ;
  }
  return favesState
  }