import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './Footer'

import "./layout.css"

const Main = styled.main`
  padding: 80px 0 0;
  min-height: calc(100vh - 210px);
`

const MainContainer = styled.div`
  max-width: 62rem;
  padding: 0 15px;
  margin: 1rem auto;
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
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

