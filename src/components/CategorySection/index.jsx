import React from 'react';
import styled from 'tachyons-components';

const StyledCategorySection = styled('div')`
  flex flex-column flex-row-ns items-baseline justify-between pv3
`;

const StyledSectionHeader = styled('p')`
  f6 fw7 lh-copy near-black
`;

const ChildrenContainer = styled('div')`
   w-100 w-60-ns
`

const CategorySection = ({children, title}) =>
  <StyledCategorySection>
    <StyledSectionHeader>{title}</StyledSectionHeader>
    <ChildrenContainer>
      {children}
    </ChildrenContainer>
  </StyledCategorySection>

 export default CategorySection;
