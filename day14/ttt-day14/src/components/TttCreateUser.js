import { useState } from 'react';
import { createUser } from '../api/api';
import { useNavigate } from 'react-router-dom';

const TttCreateUser = () => {
  const [user, setUser] = useState({ ttt_name: '', ttt_email: '', ttt_phone: '', ttt_active: false });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(user).then(() => navigate('/users'));
  };

  return (
    <div className="container">
      <h2 className="title">Thêm mới thông tin User</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <input type="text" placeholder="Full Name" onChange={e => setUser({...user, ttt_name: e.target.value})} />
        <input type="email" placeholder="Email" onChange={e => setUser({...user, ttt_email: e.target.value})} />
        <input type="text" placeholder="Phone" onChange={e => setUser({...user, ttt_phone: e.target.value})} />
        <div>
          <label>
            <input type="radio" name="active" checked={user.ttt_active} onChange={() => setUser({...user, ttt_active: true})} />
            Hoạt động
          </label>
          <label>
            <input type="radio" name="active" checked={!user.ttt_active} onChange={() => setUser({...user, ttt_active: false})} />
            Đang khóa
          </label>
        </div>
        <button type="submit" className="btn">Create</button>
        <button type="button" onClick={() => navigate('/users')} className="btn">Back</button>
      </form>
    </div>
  );
};

export default TttCreateUser;
