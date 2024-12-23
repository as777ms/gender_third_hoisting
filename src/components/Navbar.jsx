import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Логотип</div>
      <ul>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/chat">Чат</Link></li>
        <li><Link to="/resources">Ресурсы</Link></li>
        <li><Link to="/forum">Форум</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
