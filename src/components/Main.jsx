import React, { Component } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom"; // react-router-dom v6: Switch is now Routes and Navigate is now Navigate.
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
      promotions: PROMOTIONS,
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
    };

    const DishWithId = () => { //match
      const { dishParam } = useParams(); // React hooks that returns an object of key/value pairs that matches the URL
      return (
        // Returns the filtered dish and comments based on the Route path clicked.
        <DishDetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === parseInt(dishParam, 10)
              // (dish) => dish.id === parseInt(match.params.dishId, 10) // Deprecated since react-router-dom v6
            )[0]
          }
          // Returns the filtered comments with the corresponding Route path clicked.
          comments={this.state.comments.filter(
            (comment) => comment.dishId === parseInt(dishParam, 10)
            // comment.dishId === parseInt(match.params.dishId, 10) // Deprecated since react-router-dom v6
          )}
        />
      );
    };

    return (
      <div>
        <Header />
        <Routes>
          {/* Route that doesn't have props. */}
          <Route path="/home" element={<HomePage />} />
          {/* Route that have props to be passed. */}
          {/* react-router-dom v6: No need to use a function to access components that passes props. */}
          <Route
            exact
            path="/menu"
            element={<Menu dishes={this.state.dishes} />}
          />
          <Route path="/menu/:dishParam" element={<DishWithId />} />
          <Route exact path="/contactus" element={<Contact />} />
          {/* react-router-dom v6: Redirect is now Navigate. */}
          {/* Navigates to /home if there are no paths that matched. */}
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default Main;
