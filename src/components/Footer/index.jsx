import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt, faTwitter } from '@fortawesome/free-brands-svg-icons'

const MainContainer = styled.div`
  max-width: 62rem;
  padding: 0 15px;
  margin: 1rem auto;
`

const FooterContainer = styled(MainContainer)`
  display: flex;
  align-items: center;
  margin-top: 2.5rem;
  flex-direction: column;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.6);

  @media only screen and (min-width: 700px) {
    margin: 60px auto;
    flex-direction: row;
    height: 100px;
  }
`

const FooterChildContainer = styled.div`
  padding-bottom: 1.5rem;
  display: flex;
  align-items: center;
`

const FooterLink = styled.a`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  display: block;
  margin-right: 1.5rem;
`

const FooterIcon = styled(FontAwesomeIcon)`
  font-size: 1.5em;
`

const Footer = () => (
  <FooterContainer>
    <FooterChildContainer>
      <FooterLink href="https://jurvis.substack.com">Newsletter</FooterLink>
      <FooterLink href="https://jurv.is/rss.xml">RSS</FooterLink>
    </FooterChildContainer>
    <FooterChildContainer>
      <FooterLink href="https://twitter.com/jurvistan">
        <FooterIcon icon={faTwitter} color="#00aced" />
      </FooterLink>
      <FooterLink href="https://github.com/jurvis/">
        <FooterIcon icon={faGithubAlt} />
      </FooterLink>
    </FooterChildContainer>
  </FooterContainer>
)

export default Footer
