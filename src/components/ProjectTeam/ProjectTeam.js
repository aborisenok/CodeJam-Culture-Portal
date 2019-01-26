import React from 'react';
import './ProjectTeam.css';
import data from './data/data';
import MemberOfTeam from './MemberOfTeam/MemberOfTeam';

function ProjectTeam() {
  return (
    <div className="projectTeam">
      <h2>О нашей команде</h2>
      <MemberOfTeam
        data={data.aborisenok}
      />
      <MemberOfTeam
        data={data.youngbrick}
      />
      <MemberOfTeam
        data={data.kevink}
      />
      <MemberOfTeam
        data={data.fursaleksey}
      />
      <MemberOfTeam
        data={data.hentmire}
      />
    </div>
  )
}

export default ProjectTeam;
