import { graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import ProfileImage from '../components/profile_image'
import SocialBar from '../components/SocialBar'

import GoodreadsBook from '../components/GoodreadsBook'

const Para = styled.p`
  line-height: 1.6;
  margin: 0 0 1rem;
  text-align: ${props => (props.center ? 'center' : 'left')};

  &:last-of-type {
    margin: 0;
  }

  @media only screen and (min-width: 850px) {
    margin: 0 0 1rem;
    text-align: left;
  }
`

const ProfileImageContainer = styled.div`
  width: 150px;
  order: 1;
  margin-bottom: 1rem;

  @media only screen and (min-width: 850px) {
    order: 2;
    min-width: 200px;
  }
`

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (min-width: 850px) {
    flex-direction: row;
  }
`

const HeaderContainer = styled(HorizontalContainer)`
  align-items: center;

  @media only screen and (min-width: 850px) {
    margin-bottom: 2rem;
    margin: 0 auto 2rem auto;
    width: 90%;
  }
`

const IntroContainer = styled.div`
  order: 2;
  width: 100%;

  @media only screen and (min-width: 850px) {
    order: 1;
    width: 40rem;
  }
`

const HeaderTitle = styled.h2`
  text-align: center;
  text-decoration: underline;
`

const TitleContainer = styled.div`
  margin-bottom: 1.5rem;
`

const ContentContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 850px) {
    width: 80%;
  }
`

const SocialsContainer = styled.div`
  padding-top: 1rem;
  width: 100px;
  margin: 0 auto;
`

const SubstackParentContainer = styled(ContentContainer)`
  margin: 0 auto;
  text-align: center;
`

const SubstackContainer = styled(ContentContainer)`
  position: relative;
  overflow: hidden;
  padding-top: 100%;

  @media only screen and (min-width: 850px) {
    padding-top: 40%;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const SubstackPara = styled.p`
  margin-bottom: 1rem;
`

const ContentSeparator = styled.hr`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  border: none;
  border-top: medium #333;
  color: #666;
  text-align: center;
  margin-bottom: calc(1.8rem - 1px);
  margin-top: calc(1.8rem - 1px);

  &:after {
    content: '◆';
    display: inline-block;
    position: relative;
    top: -0.95em;
    padding: 0 0.25em;
    background: white;
  }

  @media only screen and (min-width: 850px) {
    width: 90%;
  }
`

const MePage = ({ data }) => {
  const nowReadingBooks = data ? data.allBooks.nodes : []
  const books = nowReadingBooks.map(b => {
    return <GoodreadsBook url={b.url} name={b.title} />
  })

  return (
    <Layout>
      <TitleContainer>
        <HeaderTitle>About</HeaderTitle>
      </TitleContainer>
      <HeaderContainer>
        <IntroContainer>
          <Para>
            Hi there! My name is Jurvis.
          </Para>
          <Para>
            I am a software engineer working on Lightning and helping people secure their Bitcoin at <a href="https://keys.casa">Casa</a>.
            I also spend my time at the University of Southern California studying Applied and Computational Mathematics.
          </Para>
          <Para>
            This blog currently hosts my higher-level ruminations on identity systems, travel, and anything I am curently learning.
          </Para>
        </IntroContainer>
        <ProfileImageContainer>
          <ProfileImage />
          <SocialsContainer>
            <SocialBar />
          </SocialsContainer>
        </ProfileImageContainer>
      </HeaderContainer>
      <ContentSeparator />
      <ContentContainer>
        <TitleContainer>
          <HeaderTitle>What Am I Reading?</HeaderTitle>
          {books}
        </TitleContainer>
      </ContentContainer>
      <ContentSeparator />
    </Layout>
  )
}

export default MePage

export const pageQuery = graphql`
  query BooksQuery {
    allBooks {
      nodes {
        title
        url
      }
    }
  }
`
