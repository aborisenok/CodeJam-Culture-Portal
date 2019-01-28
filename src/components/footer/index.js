import React, {Component} from 'react';
import './style.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
			  <div className="footer-border-span"></div>
				<span>&copy; 2019 Photo By - белорусский культурный портал</span>
        <p>Выполнено с любовью по специальному заказу The Rolling Scope School.</p>
      </footer>
    )
  }
}

export default Footer;