import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./Menu";
import DishDetail from "./DishDetail";
import { DISHES } from "../shared/dishes";

// Container component responsible for everything related to the state of the web app.
class Main extends Component {
  // Defines the state of DISHES and stores it to dishes.
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null // Sets the selected dish to none by default.
    };
  }

  onDishSelect(dishId) {
    // Changes the state of selectedDish from "null" to "dishId".
    this.setState({ selectedDish: dishId });
  }
  
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu
          dishes={this.state.dishes}
          // Makes the dishes available to use inside Menu.jsx through props.
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <DishDetail
          // Extracts the details of the selected dishId through Filter function.
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        />
      </div>
    );
  }
}

export default Main;
