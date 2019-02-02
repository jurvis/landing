import { graphql } from 'gatsby';
import { Component } from 'react';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Img from "gatsby-image";

import Header from '../components/header.js';
import Article from '../components/articlePost.jsx';

const Container = styled.div`
`

const Content = styled.main`
  margin-top: 2rem;
  padding: 60px 0 0;
  min-height: calc(100vh - 210px);

  @media only screen and (min-width: 700px) {
    margin-top: 1em;
    padding: 80px 0 0;
  }
`

const ArticleHeader = styled.header`
  margin-top: 1em;
  margin-bottom: 1em;
  margin: 0 auto;
  width: 92%;
  padding: 0 15px;

  h1, h2 {
    color: #161718;
    font-size: 1.85em;
    font-weight: 700;

    @media only screen and (min-width: 700px) {
      font-size: 3.725em;
    }
  }

  @media only screen and (min-width: 700px) {
    width: 40em;
  }
`

const PostHero = styled.div`
  max-width: 45rem;
  margin: 0 auto;
`

class BlogPost extends Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
      ? this.props.data.site.siteMetadata.title
      : null

    console.log(this.props);
    const {
      frontmatter: { title, subtitle, thumbnail },
      html,
      excerpt
    } = this.props.data.markdownRemark;

    let meta = [
      { name: 'viewport', content: 'width=device-width, user-scalable=no' },
      { name: 'viewport', content: 'initial-scale=1.0' },
      { name: 'og:title', content: title},
      { name: 'og:desciption', content: excerpt},

      { name: 'twitter:creator', content: '@jurvistan'},
      { name: 'twitter:title', content: title },
      { name: 'twitter.description', content: excerpt }
    ];
    
    if (thumbnail != null) { meta = meta.push({ name: 'og:image', content: thumbnail.childImageSharp.fluid.src })};

    return (
      <Container>
        <Helmet title={`${title} | ${siteTitle}`} meta={meta}>
          {thumbnail &&
            <meta name="og:image" content={thumbnail.childImageSharp.fluid.src} fluid={thumbnail.childImageSharp.fluid}/>
          }
          { thumbnail &&
            <meta name="twitter:image" content={thumbnail.childImageSharp.fluid.src} />
          }
          <meta name="description" content={excerpt}/>
        </Helmet>
        <Header/>
        <Content>
          <ArticleHeader>
            <h1>{title}</h1>
            {subtitle && <h2>${subtitle}</h2>}
          </ArticleHeader>
          {thumbnail &&
            <PostHero>
              <Img key={thumbnail.childImageSharp.fluid.src} fluid={thumbnail.childImageSharp.fluid}/>
            </PostHero>
          }
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
        thumbnail{
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

