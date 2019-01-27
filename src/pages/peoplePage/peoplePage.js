import React, {Component} from 'react';
import SearchList from './../../components/searchList/searchList';
import people from './../../data/people'

class PeoplePage extends Component {
    render() {
      return (
        <main>
           <SearchList data={people} />
        </main>
      )
    }
  }

export default PeoplePage;