import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import ProfileImage from '../components/profile_image'
import SocialBar from '../components/SocialBar'

import GoodreadsBook from '../components/GoodreadsBook';

const Para = styled.p`
  line-height: 1.6;
  margin: 0 0 1rem;
  text-align: ${props => props.center ? 'center' : 'left'};

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
  width: 100%

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
  padding-top: 80%
  
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
    content: "◆";
    display: inline-block;
    position: relative;
    top: -0.95em;
    padding: 0 0.25em;
    background: white;
  }

  @media only screen and (min-width: 850px) {
    width: 90%
  }
`

const MePage = () => {
  const nowReadingBooks = [
    { name: 'The Quest of the Simple Life', link: 'https://www.goodreads.com/book/show/18670760-the-quest-of-the-simple-life' },
    { name: 'Thinking in Systems: A Primer', link: 'https://www.goodreads.com/book/show/3828902-thinking-in-systems' },
    { name: 'A History of Interest Rates', link: 'https://www.goodreads.com/book/show/19076493-a-history-of-interest-rates' },
    { name: 'Finite and Infinite Games: A Vision of Life as Play and Possibility', link: 'https://www.goodreads.com/book/show/189989.Finite_and_Infinite_Games' },
    { name: 'The Sovereign Individual: Mastering the Transition to the Information Age', link: 'https://www.goodreads.com/book/show/82256.The_Sovereign_Individual' },
    { name: 'Cryptonomicon', link: 'https://www.goodreads.com/book/show/38897904-cryptonomicon' }
  ].map( b => {
    return (
      <GoodreadsBook url={b.link} name={b.name}/>
    )
  });

  return ( 
    <Layout>
      <TitleContainer>
        <HeaderTitle>About</HeaderTitle>
      </TitleContainer>
      <HeaderContainer>
        <IntroContainer>
          <Para>
            Hello there, I’m Jurvis. I am a software engineer from the island nation of Singapore.
          </Para>
          <Para>
            I enjoy spending my time thinking about the governance and identity systems that make up our world. My interest in that topic surrounds my desire to work on products and services that aim to provision equitable access to core services like healthcare, finance, energy, and education. 
          </Para>
          <Para>
            I measure the value of my life's work by my participation in applying technology to open up innovation, participation, and ingenuity to people around the globe. 
          </Para>
          <Para>
            I take a lot of <a href="https://instagram.com/jurv.is">photos</a> too! 
          </Para>
        </IntroContainer>
        <ProfileImageContainer>
          <ProfileImage/>
          <SocialsContainer>
            <SocialBar/>
          </SocialsContainer>
        </ProfileImageContainer>
      </HeaderContainer>
      <ContentSeparator/>
      <ContentContainer>
        <TitleContainer>
          <HeaderTitle>What Am I Reading?</HeaderTitle>
          {nowReadingBooks}
        </TitleContainer> 
      </ContentContainer>
      <ContentSeparator/>
      <SubstackParentContainer>
        <HeaderTitle>Let's Keep In Touch</HeaderTitle>
        <SubstackPara>Want to be friends? The best way is to sign up for my newsletter where I share the comings and goings of what I'm working/thinking about.</SubstackPara>
        <SubstackPara>Join the conversation!</SubstackPara>
        <SubstackContainer>
          <iframe height="320px" src="https://jurvis.substack.com/embed" frameborder="0" scrolling="no"></iframe>
        </SubstackContainer>
      </SubstackParentContainer>
    </Layout>
  )
}

export default MePage;
