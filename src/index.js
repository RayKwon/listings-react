import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import styles from './styles.scss';
import ListingsPage from './containers/listings';
import allReducers from './reducers';

let store = createStore(allReducers);

ReactDOM.render(
  <AppContainer>
  	<Provider store={store}>
    	<ListingsPage />
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/listings', () => {
  	ReactDOM.render(
	    <AppContainer>
	      <Provider store={store}>
		    	<ListingsPage />
		    </Provider>
	    </AppContainer>,
	    document.getElementById('app')
	  );
  });
}
