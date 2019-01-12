import React from 'react'
import PostList from '../components/PostList'
import styled from 'styled-components'

import Layout from '../components/layout'

const PostListContainer = styled.div`
  margin: 0 auto;

  @media only screen and (min-width: 700px) {
    max-width: 40em;
  }
`

const PostsPage = ({ data }) => {
  const posts = data ? data.allMarkdownRemark.edges : [];
  
  return ( 
    <Layout>
      <PostListContainer>
        <PostList posts={posts} withExcerpt={true} />
      </PostListContainer>
    </Layout>
  )
}

export default PostsPage

export const pageQuery = graphql`
  query PostsQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            date(formatString: "Do MMMM YYYY")
            title
          }
          excerpt(pruneLength: 235)
        }
      }
    }
  }
`
