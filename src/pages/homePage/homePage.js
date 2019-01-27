import React, {Component} from 'react';
import ProjectTeam from './../../components/ProjectTeam/ProjectTeam';
import ProjectDescription from './../../components/ProjectDescription/ProjectDescription';

class HomePage extends Component {
    render() {
      return (
        <main>
          <ProjectDescription />
          <ProjectTeam />
        </main>
      )
    }
  }

export default HomePage;