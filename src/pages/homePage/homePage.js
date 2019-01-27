import React, {Component} from 'react';
import ProjectTeam from './../../components/ProjectTeam/ProjectTeam';
import ProjectDescription from './../../components/ProjectDescription/ProjectDescription';
import AuthorOfDay from "../../components/AuthorOfDay/AuthorOfDay";

class HomePage extends Component {
    render() {
      return (
        <main>
          <AuthorOfDay />
          <ProjectDescription />
          <ProjectTeam />
        </main>
      )
    }
  }

export default HomePage;
