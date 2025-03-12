import React, { useState } from "react";

const ProductList = ({ products, deleteProduct, editProduct }) => {
  const [editItem, setEditItem] = useState(null);
  const [editData, setEditData] = useState({ pName: "", pQuantity: "", pPrice: "" });

  // Bắt đầu chỉnh sửa
  const handleEditClick = (product) => {
    setEditItem(product.pid);
    setEditData({
      pName: product.pName,
      pQuantity: product.pQuantity,
      pPrice: product.pPrice / 1000, // Chuyển về đơn vị nghìn
    });
  };

  // Cập nhật giá trị input
  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  // Lưu chỉnh sửa
  const handleSave = () => {
    editProduct({
      pid: editItem,
      pName: editData.pName,
      pQuantity: Number(editData.pQuantity),
      pPrice: Number(editData.pPrice) * 1000, // Chuyển lại về đơn vị VND
    });
    setEditItem(null);
  };

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Giá (nghìn VND)</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.pid}>
              <td>{product.pid}</td>
              {editItem === product.pid ? (
                <>
                  <td>
                    <input type="text" name="pName" value={editData.pName} onChange={handleChange} />
                  </td>
                  <td>
                    <input type="number" name="pQuantity" value={editData.pQuantity} onChange={handleChange} min="0" />
                  </td>
                  <td>
                    <input type="number" name="pPrice" value={editData.pPrice} onChange={handleChange} min="0" />
                  </td>
                  <td>
                    <button onClick={handleSave}>💾 Lưu</button>
                    <button onClick={() => setEditItem(null)}>❌ Hủy</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{product.pName}</td>
                  <td>{product.pQuantity}</td>
                  <td>{(product.pPrice / 1000).toLocaleString()}K</td>
                  <td>
                    <button onClick={() => handleEditClick(product)}>✏️</button>
                    <button onClick={() => deleteProduct(product.pid)}>🗑️</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
