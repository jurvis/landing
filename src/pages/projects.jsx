import React from 'react';
import styled from 'tachyons-components';

const ContentContainer = styled('div')`
  flex flex-column w-80
`;

class ProjectsPage extends React.Component {
  render() {
    return (
      <ContentContainer>
        This is the projects page
      </ContentContainer>
    )
  }
}

export default ProjectsPage
