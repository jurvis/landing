import React from 'react';
import Link from 'gatsby-link'

import styled from 'styled-components';

const Container = styled.div`
  padding-top: 1em;
  margin: 0;
`
const PostLink = styled(Link)``
const Post = styled.div`
  border-bottom: 1px solid #eee;
  padding: 1em .5em;

  &:hover {
    background-color: #f8f8f8;
  }

  @media only screen and (min-width: 700px) {
    border-right: 1px solid #eee;
  }
`
const Title = styled.h3`
  color: #1d78bd;
  transition: color 0.25s ease-in-out;
  font-size: 1.3em;
  line-height: 1.3;
  font-weight: 600;
  margin: .25em 0em;
`

const Posts = ({ posts }) => (
  <Container>
    {posts.map(post => {
      const { title, path, date } = post.node.frontmatter;

      return (
        <Post key={path}>
          <PostLink to={path}>
            <Title>{title}</Title>
          </PostLink>
        </Post>
      );
    })}
  </Container>
)

export default Posts

