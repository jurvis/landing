import React from 'react';
import styled from 'tachyons-components';

const Logo = styled('img')`
  v-mid project-icon

`;
const CompanyText = styled('span')`
  f5 fw6 v-mid lh-title
`;

const SubText = styled('p')`
  lh-copy v-mid mid-gray mv0
`;

const CompanyLink = styled('a')`
  link
`

const WorkItem = ({work}) => {
  const { logo, name, skills, timespan, link } = work;
  return (
    <div>
      <CompanyLink href={link}>
        <Logo src={`${__PATH_PREFIX__}${logo}`} alt="" />
        <CompanyText>{name}</CompanyText>
      </CompanyLink>
      <SubText>{skills}</SubText>
    </div>
  );
}

export default WorkItem;
