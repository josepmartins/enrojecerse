import { createGlobalStyle } from 'styled-components'



const BaseStyles = createGlobalStyle`
  html {
    font-size: 100%;
    line-height: 1.25;  
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap');
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
