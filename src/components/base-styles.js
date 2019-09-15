import { createGlobalStyle } from 'styled-components'
import GTSectraBookEot from '../fonts/GT-Sectra-Book.eot'
import GTSectraBookWoff from '../fonts/GT-Sectra-Book.woff'
import GTSectraBookTtf from '../fonts/GT-Sectra-Book.ttf'
import GTSectraMediumEot from '../fonts/GT-Sectra-Medium.eot'
import GTSectraMediumWoff from '../fonts/GT-Sectra-Medium.woff'
import GTSectraMediumTtf from '../fonts/GT-Sectra-Medium.ttf'


const BaseStyles = createGlobalStyle`
  @font-face {
    font-family: 'Sectra';
    src: url('${GTSectraBookEot}') format('embedded-opentype');
    src: url('${GTSectraBookEot}?#iefix') format('embedded-opentype'), url('${GTSectraBookWoff}') format('woff'), url('${GTSectraBookTtf}') format('truetype');
    font-weight: 400;
    font-style: normal; 
  }

  @font-face {
    font-family: 'Sectra';
    src: url('${GTSectraMediumEot}') format('embedded-opentype');
    src: url('${GTSectraMediumEot}?#iefix') format('embedded-opentype'), url('${GTSectraMediumWoff}') format('woff'), url('${GTSectraMediumTtf}') format('truetype');
    font-weight: 600;
    font-style: normal; 
  }

  html {
    font-size: 100%;
    line-height: 1.25;  
  }

  body {
    font-family: 'Sectra', Georgia, serif;
    font-weight: 400; 
    margin: 0;
    padding: 0;
  
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
