import React from 'react';
import SearchItem from './searchItem';
import './style.css';


function SearchList(props) {
  return (
		<div className="search-list">
      {props.data.map(elem => <SearchItem data={elem}/>)}
    </div>
  )
}

export default SearchList;