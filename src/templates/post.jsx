import { Component } from 'react';
import React from 'react';
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/header.js'

const Container = styled.div`
`

const Content = styled.article`
  max-width: 62rem;

  p {
    margin: 0 0 2rem;
    padding: 0 15px;

    @media only screen and (min-width: 700px) {
      font-size: 1.15rem;
    }
  }
`

class BlogPost extends Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
      ? this.props.data.site.siteMetadata.title
      : null

    const {
      frontmatter: { title, date, path },
      html,
      excerpt
    } = this.props.data.markdownRemark;

    return (
      <Container>
        <Helmet title={`${title} | ${siteTitle}`}>
          <meta name="description" content={excerpt}/>
        </Helmet>

        <Header></Header>
        <Content dangerouslySetInnerHTML={{__html: html}} />
      </Container>
    )
  }
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      excerpt(pruneLength: 320)
      frontmatter {
        title
        date(formatString: "Do MMMM YYYY")
        path
      }
    }
  }
`

