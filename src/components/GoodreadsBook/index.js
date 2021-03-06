import React, { Component } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  line-height: 1.3;
  margin-bottom: 1em;
`;
const BookLink = styled.a`
`;

class GoodreadsBook extends Component {
  render() {
    const { url, name } = this.props;
    return (
      <Container>
        <BookLink href={url}>{name}</BookLink>
      </Container>
    );
  }
}

export default GoodreadsBook