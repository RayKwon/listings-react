import { LOAD_LISTINGS, SAVE_PROPERTY, REMOVE_PROPERTY } from './constants';

export function loadListings(listings) {
	return {
		type: LOAD_LISTINGS,
		listings: getListings(listings)
	}
}

export function saveProperty(listing) {
	return {
		type: SAVE_PROPERTY,
		listing
	}
}

export function removeProperty(listing) {
	return {
		type: REMOVE_PROPERTY,
		listing
	}
}

const getListings = (listings) => {
	listings.results.forEach(listing => listing.isSaved = listings.saved.indexOf(listing) >= 0 ? true : false);
	listings.saved.forEach(listing => listing.isSaved = true);

	return listings;
};
