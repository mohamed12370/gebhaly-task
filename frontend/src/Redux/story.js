import { createStore, applyMiddleware } from 'redux';
import routeReducer from './routeReducer';
import thunk from 'redux-thunk';

const store = createStore(routeReducer, applyMiddleware(thunk));

export default store;
