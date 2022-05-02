import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

// Functional Component that renders the card look of the menu item.
function RenderMenuItem({ dish, onClick }) {
  //Props can also be used instead of specific parameters.
  // TODO: Study about JavaScript Maps and React Media.
  return (
    <Card>
      {/* Creates a path link to corresponding dish.id value. */}
      <Link to={`/menu/${dish.id}`}> 
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
      </Link>
    </Card>
  );
}

// ES6 Functional Component Map that calls RenderMenuItem and lists all the dishes.
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} />
      </div>
    );
  });

  // Displays DishDetail component.
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;
