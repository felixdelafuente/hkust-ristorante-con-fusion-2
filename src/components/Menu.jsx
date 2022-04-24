import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";

// Functional Component that renders the card look of the menu item.
function RenderMenuItem({ dish, onClick }) { //Props can also be used instead of specific parameters.
  // TODO: Study about JavaScript Maps and React Media.
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" object src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

// ES6 Functional Component Map that calls RenderMenuItem and lists all the dishes.
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return <div key={dish.id} className="col-12 col-md-5 m-1">
      <RenderMenuItem
        dish={dish}
        onClick={props.onClick}
      />
    </div>;
  });

  // Displays DishDetail component.
  return (
    <div className="container">
      <div className="row">{menu}</div>
    </div>
  );
}

export default Menu;
