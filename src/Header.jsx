import React from 'react'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl, Alert } from 'react-bootstrap';
import { FaMedapps, FaBars,FaFlagUsa } from 'react-icons/fa';
import { IoIosContact } from "react-icons/io";
import { MdChatBubbleOutline } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import './Header.css'

 function Header() {
  return (
    <Navbar className="daltonNavbar" bg="dark" expand="lg">
      <NavDropdown title='hamburgerGoesHere' id="basic-nav-dropdown">
        <NavDropdown.Item href="http://localhost:3000/">Today's Best Deals</NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/">Email Deals</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Header>ALL</NavDropdown.Header>
        <NavDropdown.Item href="http://localhost:3000/">Computer Systems</NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/">Components</NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/">Electronics</NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/">Gaming</NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/">Networking</NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/">Office Solutions</NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/">Software &amp; Services</NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/">Automative &amp; Industrial</NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/">Home &amp; Tools</NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/">Health &amp; Sports</NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/">Apparel &amp; Accessories</NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/">Hobbies &amp; Toys </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Header>TRENDING EVENTS</NavDropdown.Header>
        <NavDropdown.Item href="http://localhost:3000/">Refresh Your Living Space</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Header>MORE AT ROTTENHUEVOS</NavDropdown.Header>
        <NavDropdown.Item href="http://localhost:3000/">RottenHuevos Store Credit Card</NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/">RottenHuevos Gift Card</NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/">RottenHuevos Select</NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/">RottenHuevos Insider</NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/">HuevosCrate</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Header>ROTTENHUEVOS SELLERS</NavDropdown.Header>
        <NavDropdown.Item href="http://localhost:3000/">All Sellers</NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/">Sell on RottenHuevos Marketplace</NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/">Tap Into the Global Market</NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/">Leverage RottenHuevos Logistics</NavDropdown.Item>
      </NavDropdown>
  <Navbar.Brand href="#home"><a href="http://localhost:3000/"><img className="daltonLogo" src="https://i.imgur.com/dFBJfUT.png"></img></a></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"><a className="daltonSignIn" href="http://localhost:3000/">Sign in/ Register</a></Nav.Link>
      <Nav.Link href="#home"><a className="daltonBusiness" href="http://localhost:3000/">Rotten Huevos Business</a></Nav.Link>
      <Nav.Link href="#home"><a className="daltonFeedback" href="http://localhost:3000/">Feedback</a></Nav.Link>
      <Nav.Link href="#home"><a className="daltonCustomerService" href="http://localhost:3000/">Customer Service</a></Nav.Link>
      <Nav.Link href="#link"><a className="daltonShoppingCart" href="http://localhost:3000/"><img src="https://i.imgur.com/WU8Xx4F.png"></img></a></Nav.Link>
    </Nav>
    <Form inline className="daltonSearchBar">
      <FormControl type="text" placeholder="Keywords, Model # or Item" className="mr-sm-2"/>
      <Button variant="outline-success" className="daltonSearchButton">Search</Button>
    </Form>
    <Button className="daltonNightMode" variant="light" href="http://localhost:3000/"> <FaMedapps /></Button>
    <Button className="daltonSignInIcon" variant="dark" href="http://localhost:3000/"> <IoIosContact/> </Button>
    <Button className="daltonFlag" variant="dark" href="http://localhost:3000/"> <FaFlagUsa /> </Button>
    <Button className="daltonBubble" variant="dark" href="http://localhost:3000/"> <MdChatBubbleOutline /> </Button>
    <Button className="daltonQuestion" variant="dark" href="http://localhost:3000/"> <BsQuestionCircle /> </Button>
    <h5 className="daltonWelcome">Welcome</h5>
  </Navbar.Collapse>
</Navbar>
  )
}

export default Header