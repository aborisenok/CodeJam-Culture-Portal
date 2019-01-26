import React from 'react';
import './ProjectTeam.css';
import contributors from './contributors/contributors';
import MemberOfTeam from './MemberOfTeam/MemberOfTeam';

function ProjectTeam() {
  return (
    <div className="projectTeam">
      <h2>О нашей команде</h2>
      <MemberOfTeam
        data={contributors.aborisenok}
      />
      <MemberOfTeam
        data={contributors.youngbrick}
      />
      <MemberOfTeam
        data={contributors.kevink}
      />
      <MemberOfTeam
        data={contributors.fursaleksey}
      />
      <MemberOfTeam
        data={contributors.hentmire}
      />
    </div>
  )
}

export default ProjectTeam;
