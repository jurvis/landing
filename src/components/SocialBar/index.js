import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faTwitter, faAngellist } from '@fortawesome/free-brands-svg-icons'

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const SocialIconContainer = styled.a`
  color: #666
`

const FAIcon = styled(FontAwesomeIcon)`
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #333;
  }
`

const SocialBar = () => (
  <Container>
		<SocialIconContainer href="https://angel.co/jurvis"><FAIcon icon={ faAngellist } size="lg" /></SocialIconContainer>
    <SocialIconContainer href="https://twitter.com/jurvistan"><FAIcon icon={ faTwitter } size="lg" /></SocialIconContainer>
    <SocialIconContainer href="https://github.com/jurvis"><FAIcon icon={ faGithubAlt } size="lg" /></SocialIconContainer>
  </Container>
)

export default SocialBar;

