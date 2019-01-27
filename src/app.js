import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header';
import HomePage from './pages/homePage/homePage';
//mocked components, remove while ready
//const HomePage = () => <div></div>; 
const PeoplePage = () => <div></div>;

class App extends Component {
  render() {
    return (
			<Router>
				<>
					<Header />
					<Route path="/" exact component={HomePage} />
					<Route path="/phographers" component={PeoplePage} />
				</>
			</Router> 
    )
  }
}

export default App;