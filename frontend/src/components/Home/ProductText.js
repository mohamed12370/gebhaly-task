import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function ProductText({ product }) {
  return (
    <Row>
      <Col sm="12">
        <span className="fw-bolder">Name: </span> {product?.name}
      </Col>
      <Col sm="12" className="my-3">
        <span className="fw-bolder"> Description: </span>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </Col>
      <Col sm="12">
        <span className="fw-bolder"> Price: </span>
        {product?.price}
      </Col>
      <Col sm="12" className="my-3">
        <span className="fw-bolder"> Quantity: </span>
        {product?.quantity}
      </Col>
    </Row>
  );
}
