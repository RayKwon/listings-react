import { createStore, combineReducers } from 'redux';
import listingsReducer from './containers/listings/reducer';

const allReducers = combineReducers({
	listings: listingsReducer
});

export default allReducers;
