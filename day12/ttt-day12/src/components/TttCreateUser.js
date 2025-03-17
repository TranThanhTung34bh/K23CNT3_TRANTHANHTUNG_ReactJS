import React, { useState } from "react";

function CreateUser({ onAddUser }) {
  const [form, setForm] = useState({ id: "", fullName: "", userName: "", password: "" });

  // Xử lý thay đổi form
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Thêm người dùng mới
  const handleAddUser = (e) => {
    e.preventDefault();
    if (!form.id || !form.fullName || !form.userName || !form.password) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    onAddUser(form); // Gửi dữ liệu ra component cha
    setForm({ id: "", fullName: "", userName: "", password: "" }); // Reset form
  };

  return (
    <div>
      <h2>Thêm người dùng mới</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="id" placeholder="ID" value={form.id} onChange={handleChange} required />
        <input type="text" name="fullName" placeholder="Họ và tên" value={form.fullName} onChange={handleChange} required />
        <input type="text" name="userName" placeholder="Tên đăng nhập" value={form.userName} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Mật khẩu" value={form.password} onChange={handleChange} required />
        <button type="submit">Thêm mới</button>
      </form>
    </div>
  );
}

export default CreateUser;
