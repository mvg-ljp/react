import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemListContainer = ({ products }) => {
  console.log(products)
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        justifyContent: "space-around",
      }}
    >
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            style={{ width: "18rem", margin: 20, height: "500px" }}
          >
            <Link to={`/item/${product.id}`}>
              <Card.Img variant="top" src={product.thumbnail} />
            </Link>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default ItemListContainer;
