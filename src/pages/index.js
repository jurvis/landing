import React from 'react'
import PostList from '../components/PostList'
import styled from 'styled-components'

import Layout from '../components/layout'

const IntroLine = styled.p`
  font-size: 1.3rem;
`

const Section = styled.section`
  &:first-of-type {
    margin-top: 0;
  }

  @media only screen and (min-width: 850px) {
    margin: 80px 0;
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
  width: 100%;
  margin: 20px 0;

  @media only screen and (min-width: 850px) {
    width: 40%;
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
  margin-bottom: 0;
`

const IndexPage = ({ data }) => {
  const posts = data ? data.allMarkdownRemark.edges : [];
  
  return ( 
    <Layout>
      <Section>
        <h1>Hello, my name is Jurvis Tan.</h1>
        <IntroLine>I am a software developer based in Singapore</IntroLine>
        <IntroLine>I blog about my travels, things I read, software development, and technology.</IntroLine>
      </Section>
      <HorizontalSection>
        <PostsSection>
          <SectionTitle>Posts</SectionTitle>
          <PostList posts={posts} />
        </PostsSection>
        <GallerySection>
          <SectionTitle>Gallery</SectionTitle>
        </GallerySection>
      </HorizontalSection>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit:10, sort: { fields: [frontmatter___date], order: DESC }) {
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

