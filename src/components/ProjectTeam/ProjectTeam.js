import React from 'react';
import './ProjectTeam.css';
import contributors from './contributors/contributors';
import MemberOfTeam from './MemberOfTeam/MemberOfTeam';

function ProjectTeam() {
  return (
    <div className="projectTeam">
      <h2>О нашей команде</h2>
      {contributors.map((elem, index) => <MemberOfTeam data={elem} key={index}/>)}
    </div>
  )
}

export default ProjectTeam;
