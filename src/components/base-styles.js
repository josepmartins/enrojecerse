import { createGlobalStyle } from 'styled-components'
import LibreBaskervilleRegularWoff from '../fonts/libre-baskerville-regular.woff'
import LibreBaskervilleRegularWoff2 from '../fonts/libre-baskerville-regular.woff2'
import LibreBaskervilleItalicWoff from '../fonts/libre-baskerville-italic.woff'
import LibreBaskervilleItalicWoff2 from '../fonts/libre-baskerville-italic.woff2'

const BaseStyles = createGlobalStyle`
@import url("https://use.typekit.net/omy3tgb.css");

  html {
    font-size: 100%;
    line-height: 1.25;
  }

  body {

    font-family: baskerville-display-pt, serif;
    font-weight: 400;
    font-style: normal;
    margin: 0;
    padding: 0;
    color: #2A2A2A;
    background-color: #FFFEFC;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, p {
    margin: 0;
    font-weight: 400;
  }

  ::-moz-selection {
  	color: black;
  	background-color: pink;
  }
	::selection {
		color: black;
		background-color: pink;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	img {
		max-width: 100%;
	}

	p {
    margin: 0;
  }

  ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a{
    color: #2A2A2A;
    text-decoration: none;
  }
`

export default BaseStyles
