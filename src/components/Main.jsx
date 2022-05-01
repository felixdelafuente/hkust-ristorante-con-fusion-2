import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom"; // react-router-dom v6: Switch is now Routes and Navigate is now Navigate.
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import DishDetail from "./DishDetail";
import Header from "./Header";
import Footer from "./Footer";

// Container component responsible for everything related to the state of Menu and DishDetail components.
class Main extends Component {
  // Defines the state of DISHES and stores it to dishes.
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS
      //selectedDish: null // Sets the selected dish to none by default.
    };
  }

  // onDishSelect(dishId) {
  //   // Changes the state of selectedDish from "null" to "dishId".
  //   this.setState({ selectedDish: dishId });
  // }
  
  render() {

    const HomePage = () => {
      return (
        // Filters the arrays from JavaScript files and finds the values where "featured" is True.
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    // const MenuPage = () => {
    //   return (<Menu dishes={this.state.dishes} />);
    // }
    return (
      <div>
        <Header />
        <Routes>
          {/* Route that doesn't have props. */}
          <Route path="/home" element={<HomePage />} />
          {/* Route that have props to be passed. */}
          {/* react-router-dom v6: No need to use a function to access components that passes props. */}
          <Route path="/menu" element={<Menu dishes={this.state.dishes} />} />
          <Route path="/contactus" element={<Contact />} />
          {/* react-router-dom v6: Redirect is now Navigate. */}
          {/* Navigates to /home if there are no paths that matched. */}
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
        {/* <Menu
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
        /> */}
        <Footer />
      </div>
    );
  }
}

export default Main;
