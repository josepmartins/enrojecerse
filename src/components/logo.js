import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const SvgWrapper = styled.svg`
  margin-bottom: 5vh;
  border-radius: 50px;
`

class Logo extends React.Component {
  render() {
    return (
      <Link to={`/`}>
        <SvgWrapper width="50" height="50" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="displacementFilter">
              <feTurbulence numOctaves="22" type="turbulence" baseFrequency="0.6" result="turbulence"/> */}
              <feDisplacementMap in2="turbulence" in="SourceGraphic"
                  scale="280" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
          </defs>
          <g filter= "url(#displacementFilter)">
            <circle cx="100" cy="100" r="100" fill="pink"/>
          </g>
        </SvgWrapper>
      </Link>
    )
  }
}

export default Logo
