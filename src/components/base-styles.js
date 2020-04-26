import { createGlobalStyle } from 'styled-components'

const BaseStyles = createGlobalStyle`
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
