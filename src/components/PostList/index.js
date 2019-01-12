import React from 'react';
import Link from 'gatsby-link'

import styled from 'styled-components';

const Container = styled.div`
`
const PostLink = styled(Link)``
const Post = styled.div`
  border-bottom: 1px solid #eee;
  padding: 1em .5em;

  &:hover {
    background-color: #f8f8f8;
  }

  @media only screen and (min-width: 700px) {
    // border-right: 1px solid #eee;
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

const SubTitle = styled.h4`
  display: block;
  color: #888;
  margin-bottom: 0;
  font-weight: 500;
`

const Excerpt = styled.p`
  color: #4A4235;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 2.25rem 0;
  margin-bottom: 0;
`

const Posts = ({ posts, withExcerpt }) => (
  <Container>
    {posts.map(post => {
      const { excerpt } = post.node;
      const { title, path, date } = post.node.frontmatter;

      return (
        <Post key={path}>
          <PostLink to={path}>
            <Title>{title}</Title>
            <SubTitle>{date}</SubTitle>
            {withExcerpt &&
              <Excerpt>
                {excerpt}
              </Excerpt>
            }
          </PostLink>
        </Post>
      );
    })}
  </Container>
)

export default Posts

