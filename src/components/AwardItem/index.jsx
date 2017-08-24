import React from 'react';
import styled from 'tachyons-components';

const AwardString = styled('span')`
  f5 v-mid lh-copy near-black
`;

const AwardItem = ({award}) =>
  <li>
    <AwardString>{award}</AwardString>
  </li>

export default AwardItem;
