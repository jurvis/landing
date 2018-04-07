import React from 'react';
import styled from 'tachyons-components';
import ProjectDetail from '../components/ProjectDetail'

const ContentContainer = styled('div')`
`;

class ProjectsPage extends React.Component {
  render() {
    const projects = this.props.data.allProjectsJson.edges;

    return (
      <ContentContainer>
        {projects.map( projectNode => {
          const project = projectNode.node;
          return <ProjectDetail key={project.id} project={project}/>
        })}
      </ContentContainer>
    )
  }
}

export default ProjectsPage

export const query = graphql`
  query ProjectsQuery {
    allProjectsJson {
      edges {
        node {
          id
          name
          skills
          image_dir
        }
      }
    }
  }
`;

