import React from "react";
import BlockItem from "./BlockItem";
import "../App.css";
import { Container } from "react-bootstrap";

const BlockList = ({ todos }) => {
  return (
    <Container>
      <div className="blog-list">
        {todos.map((item) => (
          <BlockItem key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default BlockList;
