import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image';

import Layout from '../components/layout'
import ProfileImage from '../components/profile_image'
import SocialBar from '../components/SocialBar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAsia, faCodeBranch, faPlayCircle } from '@fortawesome/free-solid-svg-icons'

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
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: 850px) {
    flex-direction: row;
    margin-bottom: 3.75rem;
  }
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

const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (min-width: 850px) {
    width: 25%;
  }
`

const WorkMetaContainer = styled(MetaContainer)`
  align-items: center;
  margin-bottom: .5rem;

  @media only screen and (min-width: 850px) {
    align-items: left;
  }
`

const ProjectMetaContainer = styled(MetaContainer)`
  justify-content: space-evenly;
  height: 325px;

  @media only screen and (min-width: 850px) {
    height: auto;
  }
`

const WorkDescriptionContainer = styled.div`
  width: 100%;

  @media only screen and (min-width: 850px) {
    width: 70%;
  }
`

const ImageContainer = styled.div`
  margin-bottom: .5rem;
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
    top: -1em;
    padding: 0 0.25em;
    background: white;
  }

  @media only screen and (min-width: 850px) {
    width: 90%
  }
`

const CompanyImage = styled(Img)`
  border-radius: 20%;
  margin-bottom: .5rem;
`

const ProjectLinks = styled.ul`
  margin-top: 10px;
  display: flex;
  list-style-type: none;
  order: 0;
`

const ProjectLinkContainer = styled.li`
  &:not(:last-of-type) {
    margin-right: 10px;
    padding-right: 20px;
  }
`

const ProjectIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5em;
  color: #3f80ff;
`

const ProjectLink = styled.a`
  font-weight: 600;
  text-transform: uppercase;
  background: rgba(245,215,110,0.5);
  text-decoration: none;
  transition: all linear .2s;
  padding: 2px;

  &:hover {
    background: rgba(245,215,110,1);
  }
`

const MePage = ({ data }) => {
  const { harmanyImage, fossasiaImage, nebuloImage, exhibitGuideImage } = data;
  const { oromicoImage, userTestingImage, buuukImage, carousellImage } = data;
  return ( 
    <Layout>
      <TitleContainer>
        <HeaderTitle>About</HeaderTitle>
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
      <ContentSeparator/>
      <ContentContainer>
        <TitleContainer>
          <HeaderTitle>Projects</HeaderTitle>
        </TitleContainer>
        <List>
          <ProjectListItem>
            <ProjectMetaContainer>
              <ImageContainer>
                <Img fluid={harmanyImage.childImageSharp.fluid}/>
              </ImageContainer>
              <WorkTitle>Harmany</WorkTitle>
              <WorkSkills>Music Sharing Made Easy</WorkSkills>
              <WorkLocation>iOS, Design</WorkLocation>
            </ProjectMetaContainer>
            <WorkDescriptionContainer>
              <Para>
                Harmany is a simple utility that allows you to share music with your friends without having to know which streaming service they use. Especially when you have a song you really want to share, making it as easy as possible to reach the play button is crucial. 
              </Para>
              <Para>
                Just hit share from your music service of choice, and let Harmany take care of the rest.
              </Para>
              <ProjectLinks>
                <ProjectLinkContainer>
                    <ProjectIcon icon={ faGlobeAsia } size="text" />
                    <ProjectLink href="https://harmany.me/">Website</ProjectLink>
                </ProjectLinkContainer>
              </ProjectLinks>
            </WorkDescriptionContainer>
          </ProjectListItem>
          <ProjectListItem>
            <ProjectMetaContainer>
              <ImageContainer>
                <Img fluid={nebuloImage.childImageSharp.fluid}/>
              </ImageContainer>
              <WorkTitle>Nebulo</WorkTitle>
              <WorkSkills>Beautiful Smog Reports</WorkSkills>
              <WorkLocation>iOS, Design</WorkLocation>
            </ProjectMetaContainer>
            <WorkDescriptionContainer>
              <Para>Nebulo aims at creating a seamless and easy experience for people to check for the current air quality data. With just a tap, Nebulo puts smog advisory first so users can care less about the science and focus on how to react when air quality reaches unhealthy levels.</Para>
              <Para>Featured regionally and nationally, Nebulo is the top app in South East Asia for those looking to receive alerts and stay up to date with air quality.</Para>
              <ProjectLinks>
                <ProjectLinkContainer>
                    <ProjectIcon icon={ faGlobeAsia } size="text" />
                    <ProjectLink href="https://nebulo.undertide.co/">Website</ProjectLink>
                </ProjectLinkContainer>
              </ProjectLinks>
            </WorkDescriptionContainer>
          </ProjectListItem>
          <ProjectListItem>
            <ProjectMetaContainer>
              <ImageContainer>
                <Img fluid={fossasiaImage.childImageSharp.fluid}/>
              </ImageContainer>
              <WorkTitle>FOSSAsia iOS</WorkTitle>
              <WorkSkills>Asia's largest open technology conference</WorkSkills>
              <WorkLocation>iOS, Design</WorkLocation>
            </ProjectMetaContainer>
            <WorkDescriptionContainer>
              <Para>Designed with usability as a priority, I volunteered and led the design and open-source development of the companion iOS app for FOSSAsia 2016. The app allows to conference attendees to view more information about speakers, browse and bookmark available sessions, and set reminders for them.</Para>
              <ProjectLinks>
                <ProjectLinkContainer>
                    <ProjectIcon icon={ faCodeBranch } size="text" />
                    <ProjectLink href="https://github.com/fossasia/open-event-ios">Code</ProjectLink>
                </ProjectLinkContainer>
              </ProjectLinks>
            </WorkDescriptionContainer>
          </ProjectListItem>
          <ProjectListItem>
            <ProjectMetaContainer>
              <ImageContainer>
                <Img fluid={exhibitGuideImage.childImageSharp.fluid}/>
              </ImageContainer>
              <WorkTitle>ExhibitGuide</WorkTitle>
              <WorkSkills>Context-Aware Exhibition Experiences</WorkSkills>
              <WorkLocation>iOS, Design</WorkLocation>
            </ProjectMetaContainer>
            <WorkDescriptionContainer>
              <Para>
                Created with the purpose of improving audio tours, ExhibitGuide uses proximity-based information gathered from Bluetooth Low-Energy Beacons to track a user's position within an exhibition and displays relevant exhibit data to the user’s phones.
              </Para>
              <Para>
                I was involved in the product design process and wrote the iOS app as an experiment for potential clients like the Singapore Art Science Museum.
              </Para>
              <ProjectLinks>
                <ProjectLinkContainer>
                    <ProjectIcon icon={ faPlayCircle } size="text" />
                    <ProjectLink href="https://vimeo.com/126036144">Video</ProjectLink>
                </ProjectLinkContainer>
              </ProjectLinks>
            </WorkDescriptionContainer>
          </ProjectListItem>
        </List>
      </ContentContainer> 
      <ContentSeparator/>
      <ContentContainer>
        <TitleContainer>
          <HeaderTitle>Work Experience</HeaderTitle>
        </TitleContainer>
        <List>
          <ProjectListItem>
            <WorkMetaContainer>
              <CompanyImage fixed={oromicoImage.childImageSharp.fixed} />
              <WorkTitle>Oromico</WorkTitle>
              <WorkSkills>Python, React</WorkSkills>
              <WorkLocation>Singapore</WorkLocation>
            </WorkMetaContainer>
            <WorkDescriptionContainer>
              <Para center>
                Early-stage engineer building asset report-parsing software to make it easier for individuals to surface their individual financial positions and file taxes with ease.
              </Para>
            </WorkDescriptionContainer>
          </ProjectListItem>
          <ProjectListItem>
            <WorkMetaContainer>
              <CompanyImage fixed={userTestingImage.childImageSharp.fixed} />
              <WorkTitle>UserTesting</WorkTitle>
              <WorkSkills>Rails, React, iOS</WorkSkills>
              <WorkLocation>San Francisco Bay Area</WorkLocation>
            </WorkMetaContainer>
            <WorkDescriptionContainer>
              <Para center>
                Worked on tools for managers to measure team productivity, QA tools for automated regression testing for our mobile apps, as well as a bug tracking tool that helps the engineering department prioritise in tandem with our customer support team.
              </Para>
              <Para center>
                I also contributed to the UserTesting Dashboard iOS app, the app testers use to take usability tests on our platform.
              </Para>
            </WorkDescriptionContainer>
          </ProjectListItem>
          <ProjectListItem>
            <WorkMetaContainer>
              <CompanyImage fixed={buuukImage.childImageSharp.fixed} />
              <WorkTitle>buUuk</WorkTitle>
              <WorkSkills>iOS</WorkSkills>
              <WorkLocation>Singapore</WorkLocation>
            </WorkMetaContainer>
            <WorkDescriptionContainer>
              <Para center>
                Created with the purpose of enhancing the feature of existing audio tour systems, I prototyped an app that uses proximity-based information gathered from Bluetooth Low-Energy Beacons to track a user's position within an exhibition and displays relevant metadata on their phones.
              </Para>
            </WorkDescriptionContainer>
          </ProjectListItem>
          <ProjectListItem>
            <WorkMetaContainer>
              <CompanyImage fixed={carousellImage.childImageSharp.fixed} />
              <WorkTitle>Carousell</WorkTitle>
              <WorkSkills>Python, Go, JavaScript</WorkSkills>
              <WorkLocation>Singapore</WorkLocation>
            </WorkMetaContainer>
            <WorkDescriptionContainer>
              <Para center>
                Built an internal moderator tool for managing listings posted by users on the platform, as well as initial web functionality.
              </Para>
            </WorkDescriptionContainer>
          </ProjectListItem>
        </List>
      </ContentContainer>
      <ContentSeparator/>
      <ContentContainer>
        <HeaderTitle>Awards</HeaderTitle>
        <List>
          <ListItem>Singapore Computer Society Silver Medal and Prize</ListItem>
          <ListItem>Apple Worldwide Developer Conference (WWDC) 2016 Scholarship Recipient</ListItem>
          <ListItem>CodeXtremeApps 2014 Hackathon Finalist</ListItem>
          <ListItem>AngelHack AppHack Fall 2013 Prize Winner</ListItem>
        </List>
      </ContentContainer> 
    </Layout>
  )
}

export default MePage;

export const pageQuery = graphql`
  query MePageQuery {
    exhibitGuideImage: file(relativePath: { eq: "exhibitguide.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    harmanyImage: file(relativePath: { eq: "harmany.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fossasiaImage: file(relativePath: { eq: "fossasia.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    nebuloImage: file(relativePath: { eq: "nebulo.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    oromicoImage: file(relativePath: { eq: "oromico.png" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    buuukImage: file(relativePath: { eq: "buuuk.jpeg" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    carousellImage: file(relativePath: { eq: "carousell.png" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    userTestingImage: file(relativePath: { eq: "usertesting.png" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
