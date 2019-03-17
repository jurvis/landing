import Typography from "typography"

const typography = new Typography({
  headerFontFamily: ["-apple-system", "BlinkMacSystemFont","Roboto","Helvetica Neue","Helvetica","Arial","sans-serif"], 
  bodyFontFamily: ["-apple-system", "BlinkMacSystemFont","Roboto","Helvetica Neue","Helvetica","Arial","sans-serif"],
  baseFontSize: '16px',
  baseLineHeight: 1.7,
  overrideStyles: () => ({
    blockquote: {
      borderLeft: `.25rem solid #408bc9`,
      margin: `1rem 0 2rem 0rem`,
      paddingLeft: `1rem`,
     },
    '@media only screen and (min-width: 700px)': {
      blockquote: {
        margin: `1rem 0 2rem 1rem`,
      }
    }
  })
});

export default typography
