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
  flex flex-column items-center bg-white shadow-4 w-90 mt5
`;

const Navigation = styled('nav')`
  dt w-100 center
`;

const NavigationLinks = styled('div')`
  dtc v-mid tr pa3
`;

const LogoContainer = styled('div')`
  dtc w2 v-mid pa3
`;

const NavigationLink = styled('a')`
  f6 fw4 hover-yellow no-underline yellow-70 dn dib-ns pv2 ph3
`;

const Logo = styled('img')`
  dib w2 h2 pa1 ba b--white-90 grow-large border-box
`;

const ContentContainer = styled('div')`
  flex flex-column w-80
`;

const TemplateWrapper = ({ children }) =>
  <Container>
    <Helmet
      title="Jurvis Tan"
      meta={[
        { name: 'viewport', content: 'width=device-width, user-scalable=no' },
        { name: 'viewport', content: 'initial-scale=1.0' },
        { property: 'og:title', content: 'Jurvis Tan' },
        { property: 'og:description', content: 'I am a software engineer based in Singapore'},
        { property: 'og:site_name', content: 'Jurvis Tan' }
      ]}
    />
    <Navigation>
      <LogoContainer>
        <Logo src={__PATH_PREFIX__ + '/static/assets/img/profile.jpg'}/>
      </LogoContainer>
    </Navigation>
    <ContentContainer>
      {children()}
    </ContentContainer>
  </Container>

TemplateWrapper.propTypes = {
  children: PropTypes.any,
}

export default TemplateWrapper
