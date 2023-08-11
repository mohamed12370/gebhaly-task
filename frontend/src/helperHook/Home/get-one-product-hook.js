import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct } from '../../Redux/Actions/productAction';

export default function GetOneProductHook(id) {
  const dispatch = useDispatch();
  const { productReducer } = useSelector((state) => state);
  const { oneProduct } = productReducer;

  const [productDetails, setProductDetails] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      await dispatch(getOneProduct(id));
      setLoading(false);
    };
    getProduct();
  }, [dispatch, id]);

  useEffect(() => {
    if (oneProduct?.status === 'success') {
      setProductDetails(oneProduct?.product[0]);
    } else {
      setProductDetails('');
    }
  }, [oneProduct]);

  return { productDetails, loading };
}
