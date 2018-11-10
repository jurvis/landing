import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 1;
  width: 100%;
  border-bottom: 2px solid #eee;
  font-size: .85rem;

  @media only screen and (min-width:850px) {
    font-size: 1.1rem;
    height: 70px;
  }
`

const Container = styled.div`
  max-width: 850px;
  margin: auto;
  padding: 0 15px;
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  align-items: center;

  @media only screen and (min-width: 850px) {
    height: 70px;
  }
`

const ContentContainer = styled.div`
  font-weight: 600;
`

const LinksContainer = styled(ContentContainer)`
  display: flex;
  width: 100%;
  order: 1;
  justify-content: center;

  @media only screen and (min-width: 850px) {
    width: auto;
    order: 0;
    margin: 0;
  }

  @media only screen and (min-width: 700px) {
    justify-content: flex-start;
    margin: .5rem 0;
  }
`

const BrandLink = styled(Link)`
  color: #222;
  padding: 0;
  font-size: .95rem;
  margin: 0 .1rem
  border-radius: 4px;
  text-decoration: none;

  @media only screen and (min-width: 850px) {
    font-size: 1.1rem;
    margin-right: .1rem;
  }

  @media only screen and (min-width: 700px) {
    font-size: 1.1.rem;
  }
`

const PageLink = styled(Link)`
  color: #666;
  padding: .5rem .6rem;
  border-radius: 4px;
  margin: 0 .1rem;
  display: block;
  font-size: 1rem;
  margin-right: .8rem;

  @media only screen and (min-width: 850px) {
    font-size: 1.1rem;
    margin-right: .1rem;
  }

  @media only screen and (min-width: 700px) {
    font-size: 1.1.rem;
  }
`

const Header = ({ siteTitle }) => (
  <Nav>
    <Container>
      <ContentContainer>
        <BrandLink to="/">
          <span>Jurvis Tan</span>
        </BrandLink>
      </ContentContainer>
      <LinksContainer>
        <PageLink to="/me">About Me</PageLink>
        <PageLink to="/blog">Blog</PageLink>
      </LinksContainer>
    </Container>
  </Nav>
)

export default Header
