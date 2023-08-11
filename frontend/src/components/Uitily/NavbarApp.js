import React from 'react';
import { Container, Nav, Navbar, Form, Button } from 'react-bootstrap';
import logo from '../../images/logo.jpg';
import { Link } from 'react-router-dom';
import AddCartHook from '../../helperHook/Cart/add-cart-hook';
import GetProductHook from '../../helperHook/Home/get-product-hook';

export default function NavbarApp() {
  const { cartItems } = AddCartHook();
  const { searchWard, handleChangeSearch, handleSumbit } = GetProductHook();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to={`/`}>
          <img
            src={logo}
            alt=""
            width={70}
            height={70}
            className="rounded-pill"
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link
              to={`/cart`}
              className="ms-3 text-secondary position-relative"
            >
              Cart
              <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
                {cartItems?.length}
              </span>
            </Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSumbit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchWard}
              onChange={handleChangeSearch}
            />
            <Button variant="outline-success" onClick={handleSumbit}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
