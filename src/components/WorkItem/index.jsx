import React from 'react';
import styled from 'tachyons-components';

const Logo = styled('img')`
  v-mid project-icon

`;
const CompanyText = styled('span')`
  f5 fw6 v-mid lh-copy near-black
`;
const SubText = styled('span')`
  v-mid mid-gray
`;

const WorkItem = ({work}) => {
  const { logo, name, title, timespan, link } = work;
  return (
    <li>
      <a href={link}>
        <Logo src={`${__PATH_PREFIX__}${logo}`} alt="" />
        <CompanyText>{name} —</CompanyText>
        <SubText>{title}, {timespan}</SubText>
      </a>
    </li>
  );
}

export default WorkItem;
