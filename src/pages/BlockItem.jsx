import React from "react";
import Card from "react-bootstrap/Card";
const BlockItem = ({ item: { title, body } }) => {
  return (
    <Card className="mb-2" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default BlockItem;
