import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';

import usersReducer from './reducers/account-reducer';


import App from "./App";
import './index.css';

let store;
export const resetStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE_ || compose;
  store = createStore(usersReducer, composeEnhancers());
}

resetStore();
render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)


