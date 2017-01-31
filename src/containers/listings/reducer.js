import { LOAD_LISTINGS } from './constants';

const initialState = {
	results: [],
	saved: []
};

function listingsReducer(state = initialState, action) {
	switch(action.type) {
		case LOAD_LISTINGS :
			return Object.assign({}, state, action.listings);
		default :
			return state;
	}
}

export default listingsReducer;
