import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './store/reducer.js';
import { addComment } from './store/actions.js';
import DevTools from './DevTools';

const store = createStore(
  reducer,
  DevTools.instrument()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addComment('Pierwszy komentarz'));
store.dispatch(addComment('Drugi komentarz'));