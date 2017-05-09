import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx';
import configureStore from './store/store.js';




document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  // TODO: Remove store from window
  let content = document.getElementById('content');
  ReactDOM.render(<Root store={store}/>, content);
});
