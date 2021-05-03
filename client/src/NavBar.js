import React from 'react';
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
      <NavbarText>Zach Carter Asurint Interview App</NavbarText>
    </Navbar>
  )
}

export default NavBar;