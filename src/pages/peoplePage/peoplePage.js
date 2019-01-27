import React, {Component} from 'react';
import SearchList from './../../components/searchList/searchList';
import Search from './../../components/search/search'
import people from './../../data/people'

class PeoplePage extends Component {
    render() {
      return (
        <main>
           <Search/>
           <SearchList data={people} />
        </main>
      )
    }
  }

export default PeoplePage;