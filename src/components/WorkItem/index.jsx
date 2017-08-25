import React from 'react';
import styled from 'tachyons-components';

const WorkItemContainer = styled('div')`
  mb3
`

const Logo = styled('img')`
  v-mid project-icon
`;

const CompanyText = styled('span')`
  pl1 f5 fw6 v-mid lh-title
`;

const SubText = styled('p')`
  lh-copy v-mid mid-gray mv0
`;

const CompanyLink = styled('a')`
  f4 fw6 link hover-yellow
`

const WorkItem = ({work}) => {
  const { logo, name, skills, timespan, link } = work;
  return (
    <WorkItemContainer>
      <CompanyLink href={link}>
        <Logo src={`${__PATH_PREFIX__}${logo}`} alt="" />
        <CompanyText>{name}</CompanyText>
      </CompanyLink>
      <SubText>{skills}</SubText>
    </WorkItemContainer>
  );
}

export default WorkItem;
