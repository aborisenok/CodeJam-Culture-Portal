import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header';
import HomePage from './pages/homePage/homePage';
import PeoplePage from './pages/peoplePage/peoplePage';
<<<<<<< HEAD
import DescriptionPage from './pages/descriptionPage/index';
//import people from './data/people';
=======
import Footer from './components/footer';
>>>>>>> master

//mocked components, remove while ready
//const PeoplePage = () => <div></div>;

class App extends Component {
  render() {
    return (
			<Router>
				<>
					<Header />
					<Route exact path="/" component={HomePage} />
<<<<<<< HEAD
					<Route exact path="/photographers" component={PeoplePage} />
					<Route path="/photographers/:id" component={DescriptionPage} />
=======
					<Route path="/photographers" component={PeoplePage} />
					<Footer />
>>>>>>> master
				</>
			</Router> 
    )
  }
}

export default App;