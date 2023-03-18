import React, { useState } from 'react';
import './App.css';
import Product from './components/User/Product';
import ProductList from './components/User/ProductList';

function App() {
  const [productList, setProductList] = useState([]);

  const addProductHandler = (prodId, selling, prodName, catId) => {
    setProductList((prevList) => {
      return [
        ...prevList,
        { ProductId: prodId, sellingId: selling, ProductName: prodName, Category: catId }
      ];
    });
  };

  return (
    <div>
      <Product onAddProduct={addProductHandler} />
      <ProductList products={productList} />
    </div>
  );
}

export default App;
