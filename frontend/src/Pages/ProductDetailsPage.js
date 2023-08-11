import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import ProductSlider from '../components/Home/ProductSlider';
import ProductText from '../components/Home/ProductText';
import { useParams } from 'react-router-dom';
import GetOneProductHook from '../helperHook/Home/get-one-product-hook';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const { productDetails, loading } = GetOneProductHook(id);
  //console.log(productDetails);

  return (
    <Container className="py-3">
      <Row>
        {loading ? (
          <Spinner
            animation="border"
            variant="danger"
            className="text-cenetr"
          />
        ) : productDetails ? (
          <>
            <Col md="6">
              <ProductSlider images={productDetails.image} />
            </Col>
            <Col md="6">
              <ProductText product={productDetails} />
            </Col>
          </>
        ) : (
          <h6>Product Not found</h6>
        )}
      </Row>
    </Container>
  );
}
