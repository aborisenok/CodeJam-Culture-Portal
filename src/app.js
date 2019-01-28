import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header';
import HomePage from './pages/homePage/homePage';
import PeoplePage from './pages/peoplePage/peoplePage';
import DescriptionPage from './pages/descriptionPage/index';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
			<Router>
				<>
					<Header />
					<Route exact path="/" component={HomePage} />
					<Route exact path="/photographers" component={PeoplePage} />
					<Route path="/photographers/:id" component={DescriptionPage} />
					<Footer />
				</>
			</Router> 
    )
  }
}

export default App;