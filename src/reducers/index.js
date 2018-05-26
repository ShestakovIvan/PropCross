import {combineReducers} from 'redux';
import placeList  from "./placeList";
import results from "./results";
import realty from "./realty";
import recList from "./recList";
import faves from "./faves";
import error from "./error";
import spinner from "./spinner";

export default combineReducers ({
    placeList,
    results,
    realty,
    recList,
    faves,
    error,
    spinner
    
})