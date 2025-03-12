import React, { useState } from "react";
import TttProductList from "./components/TttProductList";
import TttProductAdd from "./components/TttProductAdd";

const App = () => {
  const [products, setProducts] = useState([
    { pid: 1, pName: "Sản phẩm 1", pQuantity: 10, pPrice: 100000 },
    { pid: 2, pName: "Sản phẩm 2", pQuantity: 5, pPrice: 200000 },
    { pid: 3, pName: "Sản phẩm 3", pQuantity: 8, pPrice: 150000 },
  ]);
  const [nextId, setNextId] = useState(products.length ? products[products.length - 1].pid + 1 : 1);

  const addProduct = (newProduct) => {
    const productWithId = { ...newProduct, pid: nextId };
    setProducts([...products, productWithId]);
    setNextId(nextId + 1); 
  };
  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.pid !== id);
    setProducts(updatedProducts);
  };

  // Sửa sản phẩm
  const editProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.pid === updatedProduct.pid ? updatedProduct : product
    );
    setProducts(updatedProducts);
  };
  return (
    <div className="container">
      <h1>Quản lý sản phẩm</h1>
      <TttProductAdd addProduct={addProduct} />
      <TttProductList products={products} deleteProduct={deleteProduct} editProduct={editProduct} />
      </div>
  );
};

export default App;
