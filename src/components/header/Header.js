import logo from './PermLogo.jpg';
import './Header.css';

function Header(){
  return (
    <header>
      <nav class="navbar">
        <a class="navbar__logo" href="#"></a>
        <button class="burger js-burger"></button>
      </nav>
      <div class="menu js-menu">
        <button class="burger burger--close js-burger"></button>
        <div class="menu__wrapper">
          <ul class="menu__list">
            <li class="menu__item">Главная</li>
            <li class="menu__item">История</li>
            <li class="menu__item">Достопримечательности</li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;