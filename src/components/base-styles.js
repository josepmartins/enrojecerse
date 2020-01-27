import { createGlobalStyle } from 'styled-components'
import LibreBaskervilleRegularWoff from '../fonts/libre-baskerville-regular.woff'
import LibreBaskervilleRegularWoff2 from '../fonts/libre-baskerville-regular.woff2'
import LibreBaskervilleItalicWoff from '../fonts/libre-baskerville-italic.woff'
import LibreBaskervilleItalicWoff2 from '../fonts/libre-baskerville-italic.woff2'

const BaseStyles = createGlobalStyle`
  @font-face {
    font-family: 'Libre Baskerville';
    font-style: normal;
    font-weight: 400;
    src: local('Libre Baskerville'), local('LibreBaskerville-Regular'),
        url('${LibreBaskervilleRegularWoff2}') format('woff2'), url('${LibreBaskervilleRegularWoff}') format('woff');
  }

  @font-face {
    font-family: 'Libre Baskerville';
    font-style: italic;
    font-weight: 400;
    src: local('Libre Baskerville Italic'), local('LibreBaskerville-Italic'),
        url('${LibreBaskervilleItalicWoff2}') format('woff2'), url('${LibreBaskervilleItalicWoff}') format('woff');
  }

  html {
    font-size: 100%;
    line-height: 1.25;
  }

  body {
    font-family: 'Libre Baskerville', serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.84);

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

  a{
    color: #222;
  }
`

export default BaseStyles
