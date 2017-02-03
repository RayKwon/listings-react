import { LOAD_LISTINGS, SAVE_PROPERTY, REMOVE_PROPERTY } from './constants';
import { mockedListings } from '../../mocked-listings';
import { loadListings } from './actions'

const initialState = {results: [], saved: []};

export default function listingsReducer(state = initialState, action) {
	switch(action.type) {
		case LOAD_LISTINGS :
		  return Object.assign({}, state, action.listings);

		case SAVE_PROPERTY :
		  if (state.saved.indexOf(action.listing) >= 0) {
		  	return state;
		  }else{
		  	let savedItems = [...state.saved];
		  	action.listing.isSaved = true;
		  	savedItems.push(action.listing);

		  	let resultItems = [...state.results];
		  	resultItems.forEach(item => item.isSaved = item.id === action.listing.id ? true : item.isSaved );

				return Object.assign({}, state, { results: resultItems, saved: savedItems });
		  }

		case REMOVE_PROPERTY :
			let savedItems = [...state.saved];
			const at = savedItems.indexOf(action.listing);
			savedItems.splice(at, 1);
			return Object.assign({}, state, { results: state.results, saved: savedItems });

		default :
			return state;
	}
}
