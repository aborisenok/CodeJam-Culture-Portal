import React from 'react';
import './style.css';

function SearchItem(props) {
  return (
	<div className="search-item" data-id={props.data.id}>
      <img src={props.data.avaSrc} alt={props.data.name}/>
      <div className="search-info">
        <h2 className="search-name">{props.data.name}</h2>
        <p className="search-activity">{props.data.occupation}</p>
      </div>
    </div>
  )
}

export default SearchItem;