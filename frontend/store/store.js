import { createStore, applyMiddleware } from 'redux';
import { thunkerMiddleware } from '../middleware/thunk';
import rootReducer from '../reducers/root_reducer.js';

const configureStore = () => (
  createStore(rootReducer, {}, applyMiddleware(thunkerMiddleware))
);

export default configureStore;
