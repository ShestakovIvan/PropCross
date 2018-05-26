import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import  history  from '../history'; 
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist'
 import storage from 'redux-persist/lib/storage' ; 

 const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer) 

const store = createStore (
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))

);

export const persistor = persistStore(store);
export default store;