import { createGlobalStyle } from 'styled-components'

const BaseStyles = createGlobalStyle`
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

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`
export default BaseStyles