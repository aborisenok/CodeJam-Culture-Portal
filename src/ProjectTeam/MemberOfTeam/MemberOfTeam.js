import React from 'react';
import './MemberOfTeam.css';

function MemberOfTeam(props) {
  return (
    <div className='memberOfTeam'>
      <img src={props.data.photo} alt={props.data.name} width='80px' height='80px'/>
      <h3>{props.data.name}
        <span>(@<a href={props.data.githubURL} target='_blank' rel='noopener noreferrer'>{props.data.nickName}</a>)</span>
      </h3>
    </div>
  )
}

export default MemberOfTeam;
