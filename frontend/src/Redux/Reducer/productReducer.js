const {
  GET_PRODUCT,
  GET_ONE_PRODUCT,
  GET_SEARCH_PRODUTS,
} = require('../types');

const initialState = {
  products: [],
  oneProduct: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };

    case GET_SEARCH_PRODUTS:
      return {
        ...state,
        products: action.payload,
      };

    case GET_ONE_PRODUCT:
      return {
        ...state,
        oneProduct: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
