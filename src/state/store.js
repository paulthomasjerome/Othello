import { createStore } from 'redux';
import processMoveReducer from './reducers/reducers.js';

const store = createStore(processMoveReducer);

export default store;
