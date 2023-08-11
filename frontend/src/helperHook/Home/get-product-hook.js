import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllProductsSearch,
  getProduct,
} from '../../Redux/Actions/productAction';
import { useNavigate } from 'react-router-dom';

export default function GetProductHook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { productReducer } = useSelector((state) => state);
  const { products } = productReducer;
  //console.log(products);

  const [allProducts, setAllProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [searchWard, setSearchWard] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      await dispatch(getProduct(6, 1));
      setLoading(false);
    };
    getProducts();
  }, [dispatch]);

  useEffect(() => {
    if (products.status === 200) {
      setAllProducts(products?.data?.newData);
      setPageCount(products?.data?.pagination?.numberOfPages);
    } else {
      setAllProducts([]);
      setPageCount(0);
    }
  }, [products]);

  const onPress = async (page) => {
    setLoading(true);
    await dispatch(getProduct(6, page));
    setLoading(false);
  };

  const handleChangeSearch = (e) => {
    setSearchWard(e.target.value);
  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    navigate('/');
    setLoading(true);
    await dispatch(getAllProductsSearch(searchWard));
    setLoading(false);
  };

  useEffect(() => {
    if (searchWard === '') {
      setLoading(true);
      dispatch(getProduct(6, 1));
      setLoading(false);
      return;
    }
  }, [dispatch, searchWard]);

  return {
    allProducts,
    pageCount,
    onPress,
    searchWard,
    handleChangeSearch,
    handleSumbit,
    loading,
  };
}
