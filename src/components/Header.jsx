import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false, // Default state of Collapse
    };
    // Binds the toggleNav function outside the constructor, 
    // making it available in the NavBarToggle onClick.
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen // Negates the default state.
    });
  }

  render() {
    return (
      <>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src="assets/images/logo.png"
                alt="Ristorante Con Fusion"
                height="30"
                width="41"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span> About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span> Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span> Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>

        <header className="jumbotron">
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante con Fusion</h1>
                <p>
                  We take inspiration from the World"s best cuisines, and create
                  a unique fusion experience. Our lipsmacking creations will
                  tickle your culinary senses!
                </p>
              </div>
              <div className="col-12 col-sm align-self-center d-flex justify-content-center">
                <img
                  src="../assets/images/logo.png"
                  alt="Logo"
                  className="img-fluid p-4"
                />
              </div>
              <div className="col-12 col-sm align-self-center">
                <a
                  className="btn btn-sm btn-warning pt-2 pb-2 text-white d-flex justify-content-center"
                  id="reserveBtn"
                >
                  <strong>Reserve Table</strong>
                </a>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;