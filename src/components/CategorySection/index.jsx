import React from 'react';
import styled from 'tachyons-components';

const StyledCategorySection = styled('div')`
  category work pv3
`;

const StyledSectionHeader = styled('h2')`
  f3 lh-title near-black
`;

const CategorySection = ({children, title}) =>
  <StyledCategorySection>
    <StyledSectionHeader>{title}</StyledSectionHeader>
    {children}
  </StyledCategorySection>

 export default CategorySection;
