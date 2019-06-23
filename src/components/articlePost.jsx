import styled from 'styled-components';

const Article = styled.article`
  display: flex;
  flex-direction: column;
  width: 92%;
  padding: 0 15px;
  margin: 2rem auto;

  h1, h2, h3, h4, h5, h6 {
    color: #333333;
    line-height: 1.5;
  }

  h1 {
    font-size: 1.85rem;

    @media only screen and (min-width: 700px) {
      font-size: 1.85rem;
    }
  }

  h2 {
    font-size: 1.75rem;

    @media only screen and (min-width: 700px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    color: #555555;

    @media only screen and (min-width: 700px) {
      font-size: 1.5em;
    }
  }

  h4 {
    font-size: 1.3rem;
    color: #777777;

    @media only screen and (min-width: 700px) {
      font-size: 1.3em;
    }
  }

  p {
    font-size: 1rem;
  }
  
  @media only screen and (min-width: 700px) {
    width: 45em;
    margin-top: 2rem
  }
`

export default Article

