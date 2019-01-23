import styled from 'styled-components';

const Article = styled.article`
  display: flex;
  flex-direction: column;
  width: 92%;
  padding: 0 15px;
  margin: 2rem auto;

  h1, h2, h3, h4, h5, h6 {
    color: #333333;
    line-height: 1.1;
    margin: 0 0 1rem;
  }

  h1 {
    font-size: 2em;

    @media only screen and (min-width: 700px) {
      font-size: 3em;
    }
  }

  h2 {
    font-size: 1.3rem;

    @media only screen and (min-width: 700px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1em;
    color: #555555;

    @media only screen and (min-width: 700px) {
      font-size: 1.5em;
    }
  }

  h4 {
    font-size: 1em;
    color: #777777;

    @media only screen and (min-width: 700px) {
      font-size: 1.4em;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.75;
    margin: 0 0 2rem;
  }
  
  @media only screen and (min-width: 700px) {
    width: 40em;
    margin-top: 2rem;
  }
`

export default Article

