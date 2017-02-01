import { LOAD_LISTINGS, SAVE_PROPERTY, REMOVE_PROPERTY } from '../constants';
import reducer from '../reducer';
import { mockedListings } from '../../../mocked-listings';

describe('ListingsPage reducer', () => {

	const listingToSave = {
		"price": "$526,500",
		"agency": {
			"brandingColors": {
				"primary": "#000000"
			},
			"logo": "http://i2.au.reastatic.net/agencylogo/WVYSSK/2/20140701084436.gif"
		},
		"id": "4",
		"mainImage": "http://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg"
	}

	let state;

	beforeEach(() => {
		state = {results:[], saved: []};
	});

	it('should return the initial state', () => {
		expect(
			reducer(undefined, {})
		).toEqual(mockedListings);
	});

	it('LOAD_LISTINGS should return three listings in results key', () => {
		expect(
			reducer(undefined, { type: LOAD_LISTINGS }).results.length
		).toEqual(3);
	});

	it('LOAD_LISTINGS should return one listing in saved key', () => {
		expect(
			reducer(undefined, { type: LOAD_LISTINGS }).saved.length
		).toEqual(1);
	});

	it('SAVE_PROPERTY should save listing', () => {
		expect(
			reducer(state, {
				type: SAVE_PROPERTY,
				listing: listingToSave
			}).saved.length
		).toEqual(1);
	});

	it('SAVE_PROPERTY should save listing', () => {
		expect(
			reducer(state, {
				type: SAVE_PROPERTY,
				listing: listingToSave
			}).saved.length
		).toEqual(1);
	});

	it('SAVE_PROPERTY should change isSaved property to true', () => {
		expect(
			reducer(state, {
				type: SAVE_PROPERTY,
				listing: listingToSave
			}).saved[0].isSaved
		).toEqual(true);
	});

	it('SAVE_PROPERTY should not save listing if it is already saved', () => {
		reducer(state, { type: SAVE_PROPERTY, listing: listingToSave });

		expect(
			reducer(state, {
				type: SAVE_PROPERTY,
				listing: listingToSave
			}).saved.length
		).toEqual(1);
	});

	it('REMOVE_PROPERTY should remove listing', () => {
		reducer(state, { type: SAVE_PROPERTY, listing: listingToSave });

		expect(
			reducer(state, {
				type: REMOVE_PROPERTY,
				listing: listingToSave
			}).saved.length
		).toEqual(0);
	});

});

