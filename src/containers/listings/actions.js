import { LOAD_LISTINGS } from './constants';

export function loadListings(listings) {
	return {
		type: LOAD_LISTINGS,
		listings
	}
}
