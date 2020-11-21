import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

function RelatedPages(props) {
  const { prevPost, nextPost } = props

  return (
    <Container>
      <ItemLeftContainer>
        {prevPost && (
          <>
            <RelatedLabel>PREVIOUS</RelatedLabel>
            <DateLabel>{prevPost.frontmatter.date}</DateLabel>
            <LinkContainer>
              <Link to={prevPost.fields.postPath}>
                {prevPost.frontmatter.title}
              </Link>
            </LinkContainer>
          </>
        )}
      </ItemLeftContainer>
      <ItemRightContainer>
        {nextPost && (
          <>
            <RelatedLabel>NEXT</RelatedLabel>
            <DateLabel>{nextPost.frontmatter.date}</DateLabel>
            <LinkContainer>
              <Link to={nextPost.fields.postPath}>
                {nextPost.frontmatter.title}
              </Link>
            </LinkContainer>
          </>
        )}
      </ItemRightContainer>
    </Container>
  )
}

const Container = styled.div`
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 2rem auto;

  @media screen and (max-width: 699px) {
    flex-flow: column nowrap;
    margin: 2rem 1rem;
  }

  @media screen and (min-width: 700px) {
    width: 45em;
  }
`

const ItemContainer = styled.div`
  align-content: flex-start;
  align-items: baseline;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  padding: 0.5rem 0;

  @media screen and (min-width: 700px) {
    flex: 0 0 50%;
  }
`

const ItemLeftContainer = styled(ItemContainer)`
  text-align: left;
  justify-content: flex-start;

  @media screen and (min-width: 700px) {
    border-right: 1px solid #cccccc;
    padding-right: 1rem;
  }
`

const ItemRightContainer = styled(ItemContainer)`
  text-align: right;
  justify-content: flex-end;

  @media screen and (min-width: 700px) {
    padding-left: 1rem;
  }
`

const RelatedLabel = styled.p`
  font-weight: 600;
  margin: 0;
  margin-right: 0.5rem;
  order: 1;
`

const DateLabel = styled.span`
  order: 2;
`

const LinkContainer = styled.p`
  margin: 0;
  flex: 0 0 100%;
  order: 3;
  padding: 0.1rem 0 0.1rem 0;
`

export default RelatedPages
