import React from 'react';
import styled from 'tachyons-components';

const StyledCategorySection = styled('div')`
  flex items-baseline justify-between pv3
`;

const StyledSectionHeader = styled('p')`
  f6 lh-copy near-black
`;

const ChildrenContainer = styled('div')`
  w-60
`

const CategorySection = ({children, title}) =>
  <StyledCategorySection>
    <StyledSectionHeader>{title}</StyledSectionHeader>
    <ChildrenContainer>
      {children}
    </ChildrenContainer>
  </StyledCategorySection>

 export default CategorySection;
