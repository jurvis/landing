import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const ProfileImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "me.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default ProfileImage
