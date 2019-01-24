import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import ProfileImage from '../components/profile_image'

const List = styled.ul`
`

const ListItem = styled.li`
  display: list-item;
  font-size: 1em;
  line-height: 1.3;
`

const Para = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
`

const ProfileImageContainer = styled.div`
  height: 150px;
  width: 150px;
  margin-bottom: 2rem;
`

const IntroContainer = styled.div`
  max-width: 40em;
`

const MePage = ({ data }) => {
  return ( 
    <Layout>
      <IntroContainer>
        <ProfileImageContainer>
          <ProfileImage/>
        </ProfileImageContainer>
        <h2>About Me</h2>
        <Para>
          Hello there, I'm Jurvis. I am a developer based in the island nation of Singapore. I spend most of my time developing applications in Rails, Elixir, React, Node, and Swift (in no specific order). As part of my conscription, I now spend most of my time executing command systems operations for the Singapore Armed Forces.
        </Para>
        <Para>
          I take a lot of <a href="https://instagram.com/jurv.is">photos</a> too! 
        </Para>
        {/* <Para>
          I take a lot of <a href="https://instagram.com/jurv.is">photos</a> as a hobby and have always wanted to build an internet space like this one to document my journey as a developer as well as showcase my pictures in a pleasant format independent of Instagram/SmugMug so I get as much control over the experience as much as possible.
        </Para> */}
        <Para>
          This site is inspired by <a href="https://www.taniarascia.com/">Tania Rascia</a> and <a href="https://paulstamatiou.com/">Paul Stamatiou</a>.
        </Para>
        <h2>Work</h2>
        <List>
          <ListItem><b>Oromico</b> - Python, React</ListItem>
          <ListItem><b>UserTesting</b> - Rails, React, iOS</ListItem>
          <ListItem><b>buUuk</b> - iOS</ListItem>
          <ListItem><b>Carousell</b> - Python, Go, Front-end Development</ListItem>
        </List>
      </IntroContainer> 
      <div>
        <h2>Projects</h2>
        <List>
          <ListItem>Harmany</ListItem>
          <ListItem>SG NextBus</ListItem>
          <ListItem>Nebulo</ListItem>
          <ListItem>FOSSAsia</ListItem>
        </List>
      </div> 
      <div>
        <h2>Awards</h2>
        <List>
          <ListItem>Singapore Computer Society Silver Medal and Prize</ListItem>
          <ListItem>Apple Worldwide Developer Conference (WWDC) 2016 Scholarship Recipient</ListItem>
          <ListItem>CodeXtremeApps 2014 Hackathon Finalist</ListItem>
          <ListItem>AngelHack AppHack Fall 2013 Prize Winner</ListItem>
        </List>
      </div> 
    </Layout>
  )
}

export default MePage
