import React from 'react';
import SearchItem from './searchItem';
import './style.css';
import  uuidv1 from 'uuid/v1'

function SearchList(props) {
  return (
		<div className="search-list">
      {props.data.map(elem => <SearchItem data={elem} key={uuidv1()}/>)}
    </div>
  )
}

export default SearchList;