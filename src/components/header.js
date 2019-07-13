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
  max-width: 62rem;
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

const NameContainer = styled.div`
  font-weight: 600;
  margin: .5rem auto 0 auto;

  @media only screen and (min-width: 850px) {
    margin: 0;
  }
`

const LinksContainer = styled.div`
  display: flex;
  width: 100%;
  order: 1;
  justify-content: center;

  @media only screen and (min-width: 850px) {
    width: auto;
    order: 0;
    margin: 0;
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
    font-size: 1.1rem;
  }

  &:hover {
    color: #333;
    text-decoration: underline;
  }
`

const Header = () => (
  <Nav>
    <Container>
      <NameContainer>
        <BrandLink to="/">
          <span>Jurvis Tan</span>
        </BrandLink>
      </NameContainer>
      <LinksContainer>
        <PageLink to="/me">About</PageLink>
        <PageLink to="/posts">Writing</PageLink>
        {/* <PageLink to="/photos">Photos</PageLink> */}
      </LinksContainer>
    </Container>
  </Nav>
)

export default Header
