import React, { useState } from "react";

function TttUserList() {
  // Danh sách người dùng (mô phỏng dữ liệu từ API)
  const [users, setUsers] = useState([
    { id: "SV001", fullName: "Trần Thanh Tùng", userName: "tung", password: "123456a@" },
    { id: "SV002", fullName: "Trịnh Quang Quang", userName: "QuanTrinh", password: "123456a@" },
    { id: "SV003", fullName: "Nguyễn Quang A", userName: "QuangA", password: "123456a@" },
    { id: "SV004", fullName: "Thảo Mai", userName: "maimai", password: "213213" }
  ]);

  const [form, setForm] = useState({ id: "", fullName: "", userName: "", password: "" });
  const [isEditing, setIsEditing] = useState(false);

  // Xử lý nhập dữ liệu vào form
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Xử lý chỉnh sửa tài khoản
  const handleEditUser = (user) => {
    setForm(user);
    setIsEditing(true);
  };

  // Xử lý cập nhật tài khoản
  const handleUpdateUser = (e) => {
    e.preventDefault();
    setUsers(users.map((u) => (u.id === form.id ? form : u)));
    setForm({ id: "", fullName: "", userName: "", password: "" });
    setIsEditing(false);
  };

  // Xử lý xóa tài khoản
  const handleDeleteUser = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa tài khoản này?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <div>
      <h1>Danh Sách Tài Khoản</h1>

      {/* Form cập nhật tài khoản */}
      {isEditing && (
        <form onSubmit={handleUpdateUser}>
          <label>ID: <input type="text" name="id" value={form.id} onChange={handleChange} required disabled /></label><br />
          <label>Họ và Tên: <input type="text" name="fullName" value={form.fullName} onChange={handleChange} required /></label><br />
          <label>Tên người dùng: <input type="text" name="userName" value={form.userName} onChange={handleChange} required /></label><br />
          <label>Mật khẩu: <input type="password" name="password" value={form.password} onChange={handleChange} required /></label><br />
          <button type="submit">Cập nhật</button>
        </form>
      )}

      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Họ và Tên</th>
            <th>Tên người dùng</th>
            <th>Mật khẩu</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.id}</td>
              <td>{user.fullName}</td>
              <td>{user.userName}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => handleEditUser(user)}>Sửa</button>
                <button onClick={() => handleDeleteUser(user.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TttUserList;