import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    };
  }
  
  onDishSelect(dish) {
    // Changes the state of selectedDish from "null" to "dish".
    this.setState({ selectedDish: dish });
  }

  renderDish(dish) {
    if (dish != null) {
      // Updates the content of the card on click
      return (
        <Card>
          <CardImg width='100%' object src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return (
        <div>ERROR</div>
      );
    }
  }

  render() {
    // TODO: Study about JavaScript Maps and React Media.
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className='col-12 col-md-5 m-1'>
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width='100%' object src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className='container'>
        <div className='row'>
          {menu}
        </div>
        <div className='row'>
          <div>
            {/* Displays "selectedDish" card */}
            {this.renderDish(this.state.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;