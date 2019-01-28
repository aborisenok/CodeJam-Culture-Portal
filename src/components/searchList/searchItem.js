import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

function SearchItem(props) {
  return (
    <Link to={`photographers/${props.data.id}`}>
      <div className="search-item" data-id={props.data.id}>
        <img src={props.data.avaSrc} alt={props.data.name}/>
        <div className="search-info">
          <h2 className="search-name">{props.data.name}</h2>
          <p className="search-activity">{props.data.occupation}</p>
        </div>
      </div>
    </Link>
  )
}

export default SearchItem;