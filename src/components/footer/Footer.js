import React from 'react';
import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer__container">
          <h4>Еще больше о Перми:</h4>
          <ul className="footer__list">
            <li className="list-item">
              <a href="https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D1%80%D0%BC%D1%8C#%D0%93%D1%83%D0%B1%D0%B5%D1%80%D0%BD%D1%81%D0%BA%D0%B8%D0%B9_%D1%86%D0%B5%D0%BD%D1%82%D1%80">Wikipedia</a>
            </li>
            <li className="list-item">
              <a href="https://uraloved.ru/goroda-i-sela/permskiy-krai/gorod-perm">Ураловед</a>
            </li>
            <li className="list-item">
              <a href="http://visitperm.ru/">Пермь Великая</a>
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer;