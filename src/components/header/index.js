import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './style.css';

class Navigation extends Component {
	render() {
		return (
			<nav className="nav">
				<ul className="nav-btn">
					<li><Link to="/">Главная</Link></li>
					<li><Link to="/photographers">Фотографы</Link></li>
				</ul>
				<select className="languages">
					<option>Русский</option>
					<option>Беларускі</option>
					<option>English</option>
				</select>
			</nav>
		)
	}
}

class Header extends Component {
  render() {
    return (
      <header className="header">
				<h1>Photo By</h1> 
				<p>Белорусский портал для любителей фото</p>
				<Navigation />
      </header>
    )
  }
}

export default Header;