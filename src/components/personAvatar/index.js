import React from 'react';
import './style.css'
function Avatar(props) {
  return (
    <figure className="person-info">
      <img src={props.data.avaSrc} alt={props.data.name} />
      <figcaption><h3>{props.data.name}</h3></figcaption>
    </figure>
  )
}

export default Avatar;

