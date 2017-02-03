import { createStore, combineReducers } from 'redux';
import listingsReducer from './containers/listings/reducer';

const allReducers = combineReducers({
	listingsxx: listingsReducer
});

export default allReducers;
