import React from 'react';
import "./Header.css"
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
           
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home">ChefBazar</Navbar.Brand>
            <Nav className="me-auto">
              <Link className='text-decoration-none' to={"/"}><Nav.Link href="#home">Home</Nav.Link></Link>
              <Link className='text-decoration-none' to={"/register"}>  <Nav.Link href="#hfome">Register</Nav.Link></Link>
              <Link className='text-decoration-none' to={"/login"}>  <Nav.Link href="#hhome">Login</Nav.Link></Link>
              <Link className='text-decoration-none' to={"/blog"}>  <Nav.Link href="#howme">Blog</Nav.Link></Link>
            </Nav>
            </Container>
        </Navbar>


        </div>
    );
};

export default Header;