import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import ProductCartItem from '../components/Home/ProductCartItem';
import PaginationApp from '../components/Uitily/PaginationApp';
import GetProductHook from '../helperHook/Home/get-product-hook';
import { ToastContainer } from 'react-toastify';
//import { data } from '../data';

export default function HomePage() {
  const { allProducts, pageCount, onPress, loading } = GetProductHook();
  //console.log(allProducts);

  return (
    <Container className="py-3 homeContainer">
      <Row>
        {loading ? (
          <Spinner
            animation="border"
            variant="danger"
            className="text-cenetr"
          />
        ) : (
          allProducts.map((product) => (
            <ProductCartItem key={product.id} product={product} />
          ))
        )}
      </Row>

      <Row className="d-flex justify-content-center align-items-center mt-5">
        {pageCount >= 1 ? (
          <PaginationApp pageCount={pageCount} onPress={onPress} />
        ) : null}
      </Row>

      <ToastContainer />
    </Container>
  );
}
