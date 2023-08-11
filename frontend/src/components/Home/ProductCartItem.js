import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddCartHook from '../../helperHook/Cart/add-cart-hook';

export default function ProductCartItem({ product }) {
  const { addToCart } = AddCartHook();
  return (
    <Col sm="12" md="6" lg="4">
      <Card style={{ width: '18rem' }} className="mb-5">
        <Card.Img variant="top" src={product?.img} height={200} />
        <Card.Body>
          <Card.Title>
            <span>{product?.name || ''}</span>
          </Card.Title>
          <Card.Text>
            price: <span>{product?.price || 0}</span>
          </Card.Text>
          <Card.Text>
            quantity: <span>{product?.quantity || 0}</span>
          </Card.Text>
          <Card.Text className="d-flex justify-content-between align-items-center">
            <Link to={`/product/${product.id}`} className="text-danger">
              Details
            </Link>
            <span
              className="bg-danger text-light px-2 rounded-pill fs-3"
              style={{ cursor: 'pointer' }}
              onClick={() => addToCart(product)}
            >
              +
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
