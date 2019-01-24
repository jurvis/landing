import React from 'react'
import PostList from '../components/PostList'
import styled from 'styled-components'

import Layout from '../components/layout'

const IntroLine = styled.p`
  font-size: 1.3rem;
`

const Section = styled.section`
  &:first-of-type {
    max-width: 30em;
    margin: 3rem 0;
  

  @media only screen and (min-width: 850px) {
    margin: 5rem 0;
  }
`

const HorizontalSection = styled(Section)`
  display: flex;
  flex-direction: column;
 
  @media only screen and (min-width: 850px) {
    flex-direction: row;
  }
`

const PostsSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;

  @media only screen and (min-width: 850px) {
    // width: 40%;
  }
`
const GallerySection = styled.div`
  width: 100%;
  margin: 20px 0;

  @media only screen and (min-width: 850px) {
    width: 60%;
  }
`
const SectionTitle = styled.h2`
  margin-bottom: 1rem;
`

const LinkButton = styled.a`
  border: 1.5px solid #1d78bd;
  color: #1d78bd;
  border-radius:100px;
  transition: background 0.2s ease-in-out;
  padding: 0.7rem 1.3rem;
  width: 200px;

  &:hover {
    background: #1d78bd;
    color: #fff
  }
`

const ShowMoreContainer = styled.div`
  text-align: center;
  margin-top: 2.5em;
`

const IndexPage = ({ data }) => {
  const posts = data ? data.allMarkdownRemark.edges : [];
  
  return ( 
    <Layout>
      <Section>
        <h1>Hello there! My name is Jurvis.</h1>
        <IntroLine>I am a software developer based in Singapore</IntroLine>
        <IntroLine>This site houses my writing about my travels, things I read, software development, and technology.</IntroLine>
      </Section>
      <HorizontalSection>
        <PostsSection>
          <SectionTitle>Latest Posts</SectionTitle>
          <PostList posts={posts} />
          <ShowMoreContainer>
            <LinkButton href="/posts">Show More</LinkButton>
          </ShowMoreContainer>
        </PostsSection>
        {/* <GallerySection>
          <SectionTitle>Photos</SectionTitle>
        </GallerySection> */}
      </HorizontalSection>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit:8, sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node  {
          frontmatter {
            path
            date(formatString: "Do MMMM YYYY")
            title
          }
          excerpt(pruneLength: 235)
          html
        }
      }
    }
  }
`

