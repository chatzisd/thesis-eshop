import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MyCard = (props) => {
  return (
    <Card>
      <Card.Img className="image" variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.cardText}</Card.Text>
        <Button variant="primary">{props.buttonText}</Button>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
