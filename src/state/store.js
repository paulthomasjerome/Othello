import { createStore } from 'redux';
import processMoveReducer from './reducers/reducers';

const store = createStore(processMoveReducer);

export default store;
