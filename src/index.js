import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Listings from './containers/listings';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(Listings);

if (module.hot) {
  module.hot.accept('./containers/listings', () => {
    render(Listings)
  });
}
