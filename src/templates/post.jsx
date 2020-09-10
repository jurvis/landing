import { graphql } from 'gatsby'
import { Component } from 'react'
import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Header from '../components/header.js'
import Article from '../components/articlePost.jsx'
import Footer from '../components/Footer'

const Container = styled.div``

const Content = styled.main`
  margin-top: 2rem;
  padding: 70px 0 0;
  min-height: calc(100vh - 210px);

  @media only screen and (min-width: 700px) {
    margin-top: 1.85em;
    padding: 80px 0 0;
  }
`

const ArticleHeader = styled.header`
  margin: 0 auto 2em auto;
  width: 92%;
  padding: 0 15px;

  h1,
  h2 {
    color: #161718;
    font-size: 1.85em;
    font-weight: 700;
    line-height: 1.5;
    margin: 0;

    @media only screen and (min-width: 700px) {
      font-size: 2.5em;
      line-height: 1.2;
    }
  }

  @media only screen and (min-width: 700px) {
    width: 45em;
  }
`

const PostHero = styled.div`
  max-width: 62rem;
  max-height: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  & > img {
    object-fit: fill;
  }
`

const ThumbnailCaption = styled.small`
  font-size: 0.9rem;
  color: #5f6b7a;
  line-height: 1.5;
  display: inline-block;
  align-self: center;
  margin-top: 0.3em;
`

const DateLabel = styled.span`
  color: #777777;
`

class BlogPost extends Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
      ? this.props.data.site.siteMetadata.title
      : null

    const { siteUrl } = this.props.data.site.siteMetadata
    const { href } = this.props.location
    const {
      frontmatter: { title, subtitle, thumbnail, thumbnailCaption, date },
      html,
      excerpt,
    } = this.props.data.markdownRemark

    let meta = [
      { name: 'viewport', content: 'width=device-width, user-scalable=no' },
      { name: 'viewport', content: 'initial-scale=1.0' },
      { name: 'og:title', content: title },
      { name: 'og:type', content: 'article' },
      { name: 'og:description', content: excerpt },
      { name: 'og:url', content: href },

      { name: 'twitter:creator', content: '@jurvistan' },
    ]

    if (thumbnail != null) {
      meta.push({
        name: 'og:image',
        content: `${siteUrl}${thumbnail.childImageSharp.fluid.src}`,
      })
      meta.push({ name: 'og:type', content: 'summary_large_image' })
      meta.push({
        name: 'twitter:image',
        content: `${siteUrl}${thumbnail.childImageSharp.fluid.src}`,
      })
      meta.push({ name: 'twitter:card', content: 'summary_large_image' })
    } else {
      meta.push({ name: 'og:type', content: 'summary' })
      meta.push({ name: 'twitter:card', content: 'summary' })
    }

    return (
      <Container>
        <Helmet title={`${title} | ${siteTitle}`} meta={meta} />
        <Header />
        <Content>
          <ArticleHeader>
            <h1>{title}</h1>
            {subtitle && <h2>${subtitle}</h2>}
            <DateLabel>{date}</DateLabel>
          </ArticleHeader>
          {thumbnail && (
            <PostHero>
              <Img
                key={thumbnail.childImageSharp.fluid.src}
                fluid={thumbnail.childImageSharp.fluid}
              />
              {thumbnailCaption && (
                <ThumbnailCaption>{thumbnailCaption}</ThumbnailCaption>
              )}
            </PostHero>
          )}
          <Article dangerouslySetInnerHTML={{ __html: html }} />
        </Content>
        <Footer />
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
        siteUrl
      }
    }
    markdownRemark(fields: { postPath: { eq: $path } }) {
      id
      html
      excerpt(pruneLength: 320)
      frontmatter {
        title
        date(formatString: "Do MMMM YYYY")
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        thumbnailCaption
      }
    }
  }
`
