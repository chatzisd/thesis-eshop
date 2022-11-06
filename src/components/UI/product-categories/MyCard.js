import React from "react";
import Card from "react-bootstrap/Card";

const MyCard = (props) => {
  return (
    <Card border="0" className="bg-transparent">
      <Card.Img className="image" variant="top" src={props.src} />
      <Card.ImgOverlay>
        <Card.Link href="#">{props.title}</Card.Link>
        {/* <Card.Text>{props.cardText}</Card.Text> */}
        {/* <Button variant="primary">{props.buttonText}</Button> */}
      </Card.ImgOverlay>
    </Card>
  );
};

export default MyCard;
