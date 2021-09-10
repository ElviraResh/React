import logo from './PermLogo.jpg';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <a className="nav__logo" href="#">
            <img src={logo} alt="Permlogo" /> 
            <p>ермь Великая</p>
          </a>
        </div>
        <div className="menu">
          <ul className="menu__list">
            <li className="menu__item">Главная</li>
            <li className="menu__item">История</li>
            <li className="menu__item">Достопримечательности</li>
          </ul>
        </div>
      </nav>

    </header>
  )
}

export default Header;