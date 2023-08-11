import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <Container>
      <h1>
        This Page Not Found
        <Link to={`/`}>Go Back To HomePage</Link>
      </h1>
    </Container>
  );
}
