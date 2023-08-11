import React from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import CartItem from '../components/Home/CartItem';
import AddCartHook from '../helperHook/Cart/add-cart-hook';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export default function CartPage() {
  const {
    cartItems,
    showOne,
    showAll,
    contollerCount,
    cartTotalPrice,
    handleCloseOne,
    handleShowOne,
    deleteItemCart,
    handleCloseAll,
    handleShowAll,
    deleteAllCart,
  } = AddCartHook();
  //console.log(cartItems);

  return (
    <Container className="py-3">
      <Modal show={showAll} onHide={handleCloseAll}>
        <Modal.Header closeButton>
          <Modal.Title>Delete All</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure From Deleteing All Items ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAll}>
            Close
          </Button>
          <Button variant="danger" onClick={deleteAllCart}>
            Sure
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="mb-3">
        <Col
          sm="12"
          className="d-flex justify-content-between align-items-center"
        >
          <h2 className="py-2 text-warning">Total Price: {cartTotalPrice} $</h2>
          <button
            className="btn btn-outline-danger rounded-5"
            onClick={handleShowAll}
          >
            Delete All
          </button>
        </Col>
      </Row>
      <Row>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              contollerCount={contollerCount}
              showOne={showOne}
              handleCloseOne={handleCloseOne}
              handleShowOne={handleShowOne}
              deleteItemCart={deleteItemCart}
            />
          ))
        ) : (
          <h6>
            No Products Here
            <Link to={`/`} className="ms-2 text-danger fw-bold">
              Go Shopping
            </Link>
          </h6>
        )}
      </Row>

      <ToastContainer />
    </Container>
  );
}
