import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

import "./layout.css"

const Main = styled.main`
  margin-top: 60px;
  padding: 60px 0 0;
  min-height: calc(100vh - 210px);

  @media only screen and (min-width: 700px) {
    margin-top: 70px;
    padding: 80px 0 0;
  }
`

const MainContainer = styled.div`
  max-width: 62rem;
  padding: 0 15px;
  margin-left: auto;
  margin-right: auto;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Jurvis Tan' },
            { name: 'keywords', content: 'jurvis, tan' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>
          <MainContainer>
            {children}
          </MainContainer>
        </Main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

