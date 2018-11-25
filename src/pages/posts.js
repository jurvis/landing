import React from 'react'
import PostList from '../components/PostList'
import styled from 'styled-components'

import Layout from '../components/layout'

const PostsPage = ({ data }) => {
  const posts = data ? data.allMarkdownRemark.edges : [];
  
  return ( 
    <Layout>
      <PostList posts={posts} withExcerpt={true} />
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
