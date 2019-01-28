import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './footer.css';

class Navigation extends Component {
	render() {
		return (
			<nav className="nav">
				<ul className="nav-btn">
					<li><Link to="/">Главная</Link></li>
					<li><Link to="/photographers">Фотографы</Link></li>
				</ul>
			</nav>
		)
	}
}

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
				<span>&copy; 2019 Photo By - белорусский культурный портал</span>
                <p>Выполнено с любовью по специальному заказу The Rolling Scope School.</pn>
				<Navigation />
      </footer>
    )
  }
}