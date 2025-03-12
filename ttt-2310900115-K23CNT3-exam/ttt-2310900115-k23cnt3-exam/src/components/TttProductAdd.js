import React, { useState } from "react";

const ProductAdd = ({ addProduct }) => {
  const [product, setProduct] = useState({
    pName: "",
    pQuantity: "",
    pPrice: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const quantity = Math.max(0, Number(product.pQuantity)); // Số lượng không âm
    const price = Math.max(0, Number(product.pPrice) * 1000); // Giá không âm

    if (product.pName && quantity >= 0 && price >= 0) {
      addProduct({ ...product, pQuantity: quantity, pPrice: price });
      setProduct({ pName: "", pQuantity: "", pPrice: "" });
    }
  };

  return (
    <div>
      <h2>Thêm sản phẩm</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="pName" placeholder="Tên sản phẩm" value={product.pName} onChange={handleChange} required />
        <input type="number" name="pQuantity" placeholder="Số lượng" value={product.pQuantity} onChange={handleChange} min="0" required />
        <input type="number" name="pPrice" placeholder="Giá (nghìn VND)" value={product.pPrice} onChange={handleChange} min="0" required />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default ProductAdd;
