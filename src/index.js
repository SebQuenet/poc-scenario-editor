import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { rootReducer, rootEpic } from './reducers'

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = composeWithDevTools({});

const middlewares = {
  epicMiddleware,
};

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middlewares),
  )
);
epicMiddleware.run(rootEpic);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));

registerServiceWorker();
