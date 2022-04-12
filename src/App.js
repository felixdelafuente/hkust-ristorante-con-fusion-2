import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/Menu';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {
  // Defines the state of DISHES and stores it to dishes.
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
        {/* Makes the dishes available to use inside Menu.jsx through props. */}
      </div>
    );
  }
}

export default App;
