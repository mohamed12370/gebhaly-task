import {
  ADD_TO_CART,
  CONTROLLER_CART_ITEM_COUNT,
  DELETE_CART_ALL,
  DELETE_CART_ITEM,
} from '../types';

const initialState = {
  allCartItems: JSON.parse(localStorage.getItem('cartApp')) || [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        allCartItems: action.payload,
      };

    case CONTROLLER_CART_ITEM_COUNT:
      return {
        ...state,
        allCartItems: action.payload,
      };

    case DELETE_CART_ITEM:
      return {
        ...state,
        allCartItems: action.payload,
      };

    case DELETE_CART_ALL:
      return {
        ...state,
        allCartItems: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
