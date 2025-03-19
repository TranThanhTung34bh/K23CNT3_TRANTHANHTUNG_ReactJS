import { useState, useEffect } from 'react';
import { getUser, updateUser } from '../api/api';
import { useNavigate, useParams } from 'react-router-dom';

const TttEditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({ ttt_name: '', ttt_email: '', ttt_phone: '', ttt_active: false });
  const navigate = useNavigate();

  useEffect(() => {
    getUser(id).then(response => setUser(response.data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(id, user).then(() => navigate('/users'));
  };

  return (
    <div className="container">
      <h2 className="title">Sửa thông tin User</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <input type="text" value={user.ttt_name} onChange={e => setUser({...user, ttt_name: e.target.value})} />
        <input type="email" value={user.ttt_email} onChange={e => setUser({...user, ttt_email: e.target.value})} />
        <input type="text" value={user.ttt_phone} onChange={e => setUser({...user, ttt_phone: e.target.value})} />
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
        <button type="submit" className="btn">Update</button>
        <button type="button" onClick={() => navigate('/users')} className="btn">Back</button>
      </form>
    </div>
  );
};

export default TttEditUser;
