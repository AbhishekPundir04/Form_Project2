import React, { useState } from "react";
// import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Product.module.css";

const Product = (props) => {
  const [enteredProductId, setEnteredProductId] = useState("");
  const [enteredSellingPrice, setEnteredSellingPrice] = useState("");
  const [enteredProductName, setEnteredProductName] = useState("");
  const [enteredCategoryName, setEnteredCategoryName] = useState("");
  let AddProduct = (event) => {
    event.preventDefault();
    if(enteredProductId.trim().length ===0 || enteredSellingPrice === 0 || enteredProductName === 0){
        return
    } 
    props.addProductHandler(enteredProductId, enteredSellingPrice, enteredProductName, enteredCategoryName)
    setEnteredProductId("");
    setEnteredSellingPrice("");
    setEnteredProductName("");
    setEnteredCategoryName("");
  };

  const productIdChangeHandler = (event) => {
    setEnteredProductId(event.target.value);
  };
  const sellingPriceChangeHandler = (event) => {
    setEnteredSellingPrice(event.target.value);
  };
  const productNameChangeHandler = (event) => {
    setEnteredProductName(event.target.value);
  };
  const categoryChangeHandler = (event) => {
    setEnteredCategoryName(event.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={AddProduct}>
        <label htmlFor="productId">Product Id</label>
        <input
          id="productId"
          type="number"
          value={enteredProductId}
          onChange={productIdChangeHandler}
        />
        <label htmlFor="sellingId">Selling Price</label>
        <input
          id="sellingId"
          type="number"
          value={enteredSellingPrice}
          onChange={sellingPriceChangeHandler}
        />
        <label htmlFor="productname">Product Name</label>
        <input
          id="productnameId"
          type="text"
          value={enteredProductName}
          onChange={productNameChangeHandler}
        />
        <label htmlFor="selectId">Choose a Category</label>
        <select
          id="categoryId"
          value={enteredCategoryName}
          onChange={categoryChangeHandler}
        >
          <option>Electronics</option>
          <option>Food Items</option>
          <option>SkinCare Items</option>
        </select>
        <button className={classes.button} type="submit">
          Add Product
        </button>
      </form>
    </Card>
  );
};
export default Product;
