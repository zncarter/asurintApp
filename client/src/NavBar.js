import React, { useState } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isOpen, setOpen] = useState(false);

  function toggle() {
      setOpen(!isOpen);
  }

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
    </Navbar>
  )
}

export default NavBar;