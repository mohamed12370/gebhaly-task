const { useGetData } = require('../../apiHook/useGetData');
const {
  GET_PRODUCT,
  GET_ONE_PRODUCT,
  GET_SEARCH_PRODUTS,
} = require('../types');

export const getProduct = (limit, page) => {
  return async (dispatch) => {
    try {
      const data = await useGetData(`/api/product?page=${page}&limt=${limit}`);
      dispatch({
        type: GET_PRODUCT,
        payload: data,
      });
    } catch (error) {
      console.log(`catch error from get product file redux `, error);
      dispatch({
        type: GET_PRODUCT,
        payload: error,
      });
    }
  };
};

export const getOneProduct = (id) => {
  return async (dispatch) => {
    try {
      const data = await useGetData(`/api/product/${id}`);
      dispatch({
        type: GET_ONE_PRODUCT,
        payload: data,
      });
    } catch (error) {
      console.log(`catch error from get one product file redux `, error);
      dispatch({
        type: GET_ONE_PRODUCT,
        payload: error,
      });
    }
  };
};

export const getAllProductsSearch = (word) => {
  return async (dispatch) => {
    try {
      const data = await useGetData(`/api/product?word=${word}`);
      dispatch({
        type: GET_SEARCH_PRODUTS,
        payload: data,
      });
    } catch (error) {
      console.log(
        `catch error from get all products search file redux `,
        error
      );
      dispatch({
        type: GET_SEARCH_PRODUTS,
        payload: error,
      });
    }
  };
};
