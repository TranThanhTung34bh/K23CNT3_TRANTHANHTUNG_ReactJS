import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TttNavBar from './components/TttNavBar';
import TttHome from './components/TttHome';
import TttListUsers from './components/TttListUsers';
import TttCreateUser from './components/TttCreateUser';
import TttEditUser from './components/TttEditUser';
import './styles.css';

const TttApp = () => (
  <Router>
    <TttNavBar />
    <Routes>
      <Route path="/" element={<TttHome />} />
      <Route path="/users" element={<TttListUsers />} />
      <Route path="/create" element={<TttCreateUser />} />
      <Route path="/edit/:id" element={<TttEditUser />} />
    </Routes>
  </Router>
);

export default TttApp;
