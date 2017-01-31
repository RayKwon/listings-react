import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';

import styles from './styles.scss';
import Listings from './containers/listings';
import { loadListings } from './containers/listings/actions';
import listingsReducer from './containers/listings/reducer';
import { LOAD_LISTINGS } from './containers/listings/constants';
import { mockedListings } from './mocked-listings';


let store = createStore(listingsReducer);
let listings = [];
store.subscribe(() => listings = store.getState());
store.dispatch(loadListings(mockedListings));


ReactDOM.render(
  <AppContainer>
    <Listings data={listings} />
  </AppContainer>,
  document.getElementById('app')
);


if (module.hot) {
  module.hot.accept('./containers/listings', () => {
  	ReactDOM.render(
	    <AppContainer>
	      <Listings data={listings} />
	    </AppContainer>,
	    document.getElementById('app')
	  );
  });
}
