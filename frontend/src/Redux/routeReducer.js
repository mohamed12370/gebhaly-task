import { combineReducers } from 'redux';
import productReducer from './Reducer/productReducer';
import cartReducer from './Reducer/cartReducer';

const routeReducer = combineReducers({
  productReducer: productReducer,
  cartReducer: cartReducer,
});

export default routeReducer;
