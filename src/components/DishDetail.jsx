import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

// Method that renders the content of the selected dish.
function RenderDish({ dish }) {
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
function RenderComments({ comments }) {
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
const DishDetail = (props) => {
  // Checks if there are details and comments on the dish.
  if (props.dish != null) {
    // Returns the dish's card details and comments.
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.dish.comments} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
