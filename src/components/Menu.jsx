import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import DishDetail from "./DishDetail";

class Menu extends Component {
  constructor(props) {
    super(props);

    // Sets the selected dish to none.
    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    // Changes the state of selectedDish from "null" to "dish".
    this.setState({ selectedDish: dish });
  }

  // Map that lists all the dishes.
  render() {
    // TODO: Study about JavaScript Maps and React Media.
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        {/* Displays DishDetail card. */}
        <DishDetail dish={this.state.selectedDish} />
      </div>
    );
  }
}

export default Menu;
