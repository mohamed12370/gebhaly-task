import React from 'react';
import { Button, Card, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CartItem({
  product,
  contollerCount,
  showOne,
  handleCloseOne,
  handleShowOne,
  deleteItemCart,
}) {
  return (
    <>
      <Modal show={showOne} onHide={handleCloseOne}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You Sure From Deleteing This Item ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseOne}>
            Close
          </Button>
          <Button variant="danger" onClick={() => deleteItemCart(product)}>
            Sure
          </Button>
        </Modal.Footer>
      </Modal>

      <Col>
        <Card style={{ width: '18rem' }} className="mb-5">
          <Link to={`/product/${product?.id}`} className="text-danger">
            <Card.Img
              variant="top"
              src={product?.img || 'images\\apple1.jpg'}
              height={200}
            />
          </Link>
          <Card.Body>
            <Card.Title>
              <span>{product?.name || ''}</span>
            </Card.Title>
            <Card.Title>
              price: <span>{product?.price || 0}</span>
            </Card.Title>
            <Card.Title className="d-flex justify-content-between align-items-center">
              <span> count: {product?.count || 0}</span>
              <div className="d-flex align-items-center">
                <span
                  className="fs-3 bg-secondary px-3 rounded-pill text-light"
                  style={{ cursor: 'pointer' }}
                  onClick={() => contollerCount(product, '+')}
                >
                  +
                </span>
                <span
                  className="fs-3 ms-3 bg-secondary px-3 rounded-pill text-light"
                  style={{ cursor: 'pointer' }}
                  onClick={() => contollerCount(product, '-')}
                >
                  -
                </span>
              </div>
            </Card.Title>
            <Card.Title className="d-flex justify-content-end align-items-center mt-4">
              <div
                className="bg-danger text-light p-2 rounded-pill fs-6"
                style={{ cursor: 'pointer' }}
                onClick={() => deleteItemCart(product)}
                //onClick={handleShowOne}
              >
                remove
              </div>
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
