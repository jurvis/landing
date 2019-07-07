import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import ProfileImage from '../components/profile_image'
import SocialBar from '../components/SocialBar'

const List = styled.ul`
  margin: 0 0 2rem;
  list-style: none;
`

const ListItem = styled.li`
  font-size: 1em;
  line-height: 1.3;
  margin: 0 0 1rem;
`

const ProjectListItem = styled(ListItem)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const WorkTitle = styled.h4`
  margin: 0;
`

const WorkLocation = styled.p`
  margin: 0;
  color: #8895A7;
`

const WorkSkills = styled.p`
  margin: 0;
  color: #5F6B7A;
`

const Para = styled.p`
  font-size: 1.25rem
  line-height: 1.6;
  margin: 0 0 1rem;
`

const ProfileImageContainer = styled.div`
  min-width: 200px;
`

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; 
`

const HeaderContainer = styled(HorizontalContainer)`
  margin-bottom: 2rem;
`

const IntroContainer = styled.div`
  width: 40rem;
`

const HeaderTitle = styled.h2`
  text-align: center;
  text-decoration: underline;
`

const TitleContainer = styled.div`
  margin-bottom: 2rem;
`

const SocialsContainer = styled.div`
  padding-top: 1rem;
  width: 100px;
  margin: 0 auto;
`

const WorkMetaContainer = styled.div`
  width: 20%;
`

const WorkDescriptionContainer = styled.div`
  width: 70%;
`

const MePage = ({ data }) => {
  return ( 
    <Layout>
      <TitleContainer>
        <HeaderTitle>About Me</HeaderTitle>
      </TitleContainer>
      <HeaderContainer>
        <IntroContainer>
          <Para>
            Hello there, I'm Jurvis. I am a developer based in the island nation of Singapore. I spend most of my time developing applications in Rails, Elixir, React, Node, and Swift (in no specific order). In 2013, I started <a href="https://undertide.co/">Undertide</a> to build websites and apps.
          </Para>
          <Para>
           As part of my conscription, I now spend most of my time as a Signals Sergeant executing command information systems operations for the Singapore Armed Forces.
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
        </IntroContainer>
        <ProfileImageContainer>
          <ProfileImage/>
          <SocialsContainer>
            <SocialBar/>
          </SocialsContainer>
        </ProfileImageContainer>
      </HeaderContainer>
      <div>
        <TitleContainer>
          <HeaderTitle>Projects</HeaderTitle>
        </TitleContainer>
        <List>
          <ProjectListItem>
            <WorkMetaContainer>
              <WorkTitle>Harmany</WorkTitle>
              <WorkSkills>Undertide LLP</WorkSkills>
              <WorkLocation>iOS, Design</WorkLocation>
            </WorkMetaContainer>
            <WorkDescriptionContainer>
              <Para>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sapien sit amet porta euismod. Pellentesque vel vulputate ligula, ornare ornare neque. Aenean orci justo, fermentum sit amet accumsan a, lobortis in magna. Suspendisse condimentum tortor eu odio gravida, aliquam ornare ligula consequat. Sed porta velit id sapien fringilla vulputate. Etiam rutrum enim sit amet arcu ultrices mattis. Aliquam erat volutpat. Mauris rutrum convallis libero, quis porta sem blandit quis. Cras hendrerit dui aliquam, auctor eros ac, vehicula quam.
              </Para>
            </WorkDescriptionContainer>
          </ProjectListItem>
          <ProjectListItem>
            <WorkMetaContainer>
              <WorkTitle>NextBus.SG</WorkTitle>
              <WorkSkills>Undertide LLP</WorkSkills>
              <WorkLocation>React, Design</WorkLocation>
            </WorkMetaContainer>
            <WorkDescriptionContainer>
              <Para>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sapien sit amet porta euismod. Pellentesque vel vulputate ligula, ornare ornare neque. Aenean orci justo, fermentum sit amet accumsan a, lobortis in magna. Suspendisse condimentum tortor eu odio gravida, aliquam ornare ligula consequat. Sed porta velit id sapien fringilla vulputate. Etiam rutrum enim sit amet arcu ultrices mattis. Aliquam erat volutpat. Mauris rutrum convallis libero, quis porta sem blandit quis. Cras hendrerit dui aliquam, auctor eros ac, vehicula quam.
              </Para>
            </WorkDescriptionContainer>
          </ProjectListItem>
          <ProjectListItem>
            <WorkMetaContainer>
              <WorkTitle>Nebulo</WorkTitle>
              <WorkSkills>Undertide LLP</WorkSkills>
              <WorkLocation>iOS, Golang, Design</WorkLocation>
            </WorkMetaContainer>
            <WorkDescriptionContainer>
              <Para>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sapien sit amet porta euismod. Pellentesque vel vulputate ligula, ornare ornare neque. Aenean orci justo, fermentum sit amet accumsan a, lobortis in magna. Suspendisse condimentum tortor eu odio gravida, aliquam ornare ligula consequat. Sed porta velit id sapien fringilla vulputate. Etiam rutrum enim sit amet arcu ultrices mattis. Aliquam erat volutpat. Mauris rutrum convallis libero, quis porta sem blandit quis. Cras hendrerit dui aliquam, auctor eros ac, vehicula quam.
              </Para>
            </WorkDescriptionContainer>
          </ProjectListItem>
          <ProjectListItem>
            <WorkMetaContainer>
              <WorkTitle>FOSSAsia</WorkTitle>
              <WorkSkills>Undertide LLP</WorkSkills>
              <WorkLocation>iOS, Design</WorkLocation>
            </WorkMetaContainer>
            <WorkDescriptionContainer>
              <Para>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus sapien sit amet porta euismod. Pellentesque vel vulputate ligula, ornare ornare neque. Aenean orci justo, fermentum sit amet accumsan a, lobortis in magna. Suspendisse condimentum tortor eu odio gravida, aliquam ornare ligula consequat. Sed porta velit id sapien fringilla vulputate. Etiam rutrum enim sit amet arcu ultrices mattis. Aliquam erat volutpat. Mauris rutrum convallis libero, quis porta sem blandit quis. Cras hendrerit dui aliquam, auctor eros ac, vehicula quam.
              </Para>
            </WorkDescriptionContainer>
          </ProjectListItem>
        </List>
      </div> 
      <div>
        <TitleContainer>
          <HeaderTitle>Work Experience</HeaderTitle>
        </TitleContainer>
        <List>
          <ListItem>
            <WorkTitle>Oromico</WorkTitle>
            <WorkSkills>Python, React</WorkSkills>
            <WorkLocation>Singapore</WorkLocation>
          </ListItem>
          <ListItem>
            <WorkTitle>UserTesting</WorkTitle>
            <WorkSkills>Rails, React, iOS</WorkSkills>
            <WorkLocation>San Francisco Bay Area</WorkLocation>
          </ListItem>
          <ListItem>
            <WorkTitle>buUuk</WorkTitle>
            <WorkSkills>iOS</WorkSkills>
            <WorkLocation>Singapore</WorkLocation>
          </ListItem>
          <ListItem>
            <WorkTitle>Carousell</WorkTitle>
            <WorkSkills>Python, Go, Front-end Development</WorkSkills>
            <WorkLocation>Singapore</WorkLocation>
          </ListItem>
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
