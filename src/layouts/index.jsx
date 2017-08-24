import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'tachyons-components';

import './index.css';

const StyledHeader = styled('div')`
  intro pa3 pa5-ns bg-yellow
`;
const TitleText = styled('h1')`
  f2 f1-ns lh-solid
`;

const DescriptionText = styled('span')`
  f3 f2-ns lh-title
`;

const Container = styled('div')`
  container center w-100
`;

const TemplateWrapper = ({ children }) =>
  <Container>
    <Helmet
      title="Jurvis Tan"
      meta={[
        { name: 'viewport', content: 'width=device-width, user-scalable=no' },
        { name: 'viewport', content: 'initial-scale=1.0' },
        { property: 'og:title', content: 'Jurvis Tan' },
        { property: 'og:decsription', content: 'I am a software engineer based in Singapore'},
        { property: 'og:site_name', content: 'Jurvis Tan' }
      ]}
    />
    <StyledHeader>
      <img src={__PATH_PREFIX__ + "/static/assets/img/profile.jpg"} alt="profile picture"/>
      <TitleText>Hello!</TitleText>
      <TitleText>My name is <span>Jurvis.</span></TitleText>
      <DescriptionText>I am a software engineer based in Singapore.</DescriptionText>
    </StyledHeader>
    {children()}
  </Container>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
