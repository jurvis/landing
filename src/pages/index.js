import React from 'react'
import PostList from '../components/PostList'
import styled from 'styled-components'

import Layout from '../components/layout'

const IntroLine = styled.p`
  font-size: 1.3rem;
`

const Section = styled.section`
  margin: 50px 0;

  &:first-of-type {
    margin-top: 0;
  }

  @media only screen and (min-width: 700px) {
    margin: 80px 0;
  }
`

const HorizontalSection = styled(Section)`
  display: flex;
  flex-direction: horizontal;
`

const PostsSection = styled.div`
  width: 40%;
`
const GallerySection = styled.div`
  width: 60%;
`

const IndexPage = ({ data }) => {
  const posts = data ? data.allMarkdownRemark.edges : [];
  
  return ( 
    <Layout>
      <Section>
        <h1>Hello, my name is Jurvis.</h1>
        <IntroLine>I am a software developer based in Singapore</IntroLine>
        <IntroLine>I like building things, taking photos, and writing about them!</IntroLine>
      </Section>
      <HorizontalSection>
        <PostsSection>
          <h2>Posts</h2>
          <PostList posts={posts} />
        </PostsSection>
        <GallerySection>
          <h2>Gallery</h2>
        </GallerySection>
      </HorizontalSection>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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

