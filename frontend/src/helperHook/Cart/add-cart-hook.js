import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  ADD_TO_CART,
  CONTROLLER_CART_ITEM_COUNT,
  DELETE_CART_ALL,
  DELETE_CART_ITEM,
} from '../../Redux/types';

export default function AddCartHook() {
  const dispatch = useDispatch();
  const { cartReducer } = useSelector((state) => state);
  const { allCartItems } = cartReducer;
  //console.log(allCartItems);

  const [cartItems, setCartItems] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [showOne, setShowOne] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const handleCloseOne = () => setShowOne(false);
  const handleShowOne = () => setShowOne(true);

  const handleCloseAll = () => setShowAll(false);
  const handleShowAll = () => setShowAll(true);

  // handle add new item to cart
  const addToCart = (product) => {
    const cartApp = JSON.parse(localStorage.getItem('cartApp')) || [];

    const isExistsProduct = cartApp.filter((el) => el.id === product.id);
    if (!isExistsProduct.length) {
      product.count = 1;
      product.oldPrice = parseInt(product.price);
      cartApp.push(product);
      localStorage.setItem('cartApp', JSON.stringify(cartApp));
      toast.success('Done');
      dispatch({
        type: ADD_TO_CART,
        payload: cartApp,
      });
    } else {
      return toast.warn('This product already exists');
    }
  };

  useEffect(() => {
    setCartItems(allCartItems);
  }, [allCartItems]);

  useEffect(() => {
    if (cartItems.length) {
      const totalPrice = cartItems.reduce(
        (ac, el) => ac + parseInt(el.price),
        0
      );
      setCartTotalPrice(totalPrice);
    } else {
      setCartTotalPrice(0);
    }
  }, [cartItems, allCartItems]);

  // handle controle increase and decrease item count
  const contollerCount = (product, flag) => {
    let cartApp = JSON.parse(localStorage.getItem('cartApp')) || [];

    if (flag === '+') {
      cartApp = cartApp?.map((el) => {
        if (el.id === product.id) {
          if (el.count >= el.quantity) {
            toast.warn('It cannot increase from available quantity');
            return el;
          }
          el.count += 1;
          el.price = `${parseInt(el.price) + el.oldPrice} $`;
          return el;
        } else {
          return el;
        }
      });
    } else {
      cartApp = cartApp?.map((el) => {
        if (el.id === product.id) {
          if (el.count <= 1) {
            toast.warn('It cannot decrease from one');
            return el;
          }
          el.count -= 1;
          el.price = `${parseInt(el.price) - el.oldPrice} $`;
          return el;
        } else {
          return el;
        }
      });
    }

    dispatch({
      type: CONTROLLER_CART_ITEM_COUNT,
      payload: cartApp,
    });
    localStorage.setItem('cartApp', JSON.stringify(cartApp));
  };

  // handle delete one item
  const deleteItemCart = (product) => {
    const cartApp = JSON.parse(localStorage.getItem('cartApp')) || [];
    const newCartApp = cartApp.filter((el) => el.id !== product.id);

    localStorage.setItem('cartApp', JSON.stringify(newCartApp));
    dispatch({
      type: DELETE_CART_ITEM,
      payload: newCartApp,
    });
    handleCloseOne();
  };

  // handle delete all items
  const deleteAllCart = () => {
    localStorage.removeItem('cartApp');
    dispatch({
      type: DELETE_CART_ALL,
      payload: [],
    });
    handleCloseAll();
  };

  return {
    cartItems,
    showOne,
    showAll,
    addToCart,
    contollerCount,
    cartTotalPrice,
    handleCloseOne,
    handleShowOne,
    deleteItemCart,
    handleCloseAll,
    handleShowAll,
    deleteAllCart,
  };
}
