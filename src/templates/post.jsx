import { Component } from 'react';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/header.js';
import Article from '../components/articlePost.jsx';

const Container = styled.div`
`

const Content = styled.main`
  margin-top: 60px;
  padding: 60px 0 0;
  min-height: calc(100vh - 210px);

  @media only screen and (min-width: 700px) {
    margin-top: 70px;
    padding: 80px 0 0;
  }
`

const ArticleHeader = styled.header`
  margin-top: 4em;
  margin-bottom: 2.5em;
  margin: 0 auto;
  width: 92%;
  padding: 0 15px;

  h1, h2 {
    color: #161718;
    font-size: 1.85em;
    font-weight: 700;

    @media only screen and (min-width: 700px) {
      font-size: 3.875em;
    }
  }

  @media only screen and (min-width: 700px) {
    width: 40em;
  }
`

class BlogPost extends Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
      ? this.props.data.site.siteMetadata.title
      : null

    console.log(this.props);
    const {
      frontmatter: { title, date, path, subtitle },
      html,
      excerpt
    } = this.props.data.markdownRemark;

    return (
      <Container>
        <Helmet title={`${title} | ${siteTitle}`}>
          <meta name="description" content={excerpt}/>
        </Helmet>

        <Header/>
        <Content>
          <ArticleHeader>
            <h1>{title}</h1>
            {subtitle && <h2>${subtitle}</h2>}
          </ArticleHeader>
          <Article dangerouslySetInnerHTML={{__html: html}} />
        </Content>
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

