import React from "react";
import Card from "../UI/Card";
import classes from "./ProductList.module.css";

const ProductList = (props) => {
  return (
    <Card className={classes.products}>
      <ul>
        {props.products && props.products.map((product) => (
          <li key={product.productId}>
            {product.productId} {product.sellingId} {product.productnameId} {product.categoryId}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ProductList;
