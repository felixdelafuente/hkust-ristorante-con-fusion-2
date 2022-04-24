import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  // Method that renders the content of the selected dish.
  renderDish(dish) {
    // Checks if there are no comments on the dish.
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  // Method that renders the comments of the selected dish.
  renderComments(comments) {
    // Checks if there are no comments on the dish.
    if (comments == null) {
      return <div></div>;
    }

    // Map that lists all the comments of the selected dish.
    const commentSection = comments.map((comment) => {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            --&nbsp;{comment.author},&nbsp;
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit",
            }).format(new Date(comment.date))}
          </p>
        </li>
      );
    });

    // Returns the heading and unordered list containing the comments.
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">{commentSection}</ul>
      </div>
    );
  }

  // Renders the dish's card details and comments from the methods renderDish and renderComments.
  render() {
    const dish = this.props.dish;

    // Checks if there are no data on the dish.
    if (dish == null) {
      return <div></div>;
    }

    const dishItem = this.renderDish(dish);
    const dishComment = this.renderComments(dish.comments);

    // Returns the dish's card details and comments.
    return (
      <div className="container">
        <div className="row">
          {dishItem}
          {dishComment}
        </div>
      </div>
    );
  }
}

export default DishDetail;
