import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  padding: 3vh var(--layout-side-margins) 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap:wrap;
`
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
  flex-wrap:wrap;

  & a { display: flex; }
`
const ContactWrapper = styled.div`
  display: flex;
  flex: 2;
  flex-wrap: wrap;
  justify-content: flex-end;
  position: relative;

  a {
    font-size: 12px;
    text-transform: uppercase;
    position relative;

    &:after{
      content: "";
      position: absolute;
      z-index: 0;
      right: 0;
      width: 0;
      bottom: 40%;
      height: 1px;
      transition-property: width;
      transition-duration: .25s;
      transition-timing-function: cubic-bezier(.36,.01,.44,.8);
      background-color: var(--primary-color);
    }

    &:hover{
      &:after{
        left: 0;
        right: auto;
        width: 100%;
      }
    }
  }
`
const SvgWrapper = styled.svg`
  border-radius: 50px;
`

const Header = (props) => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Link to={`/`}>
          <SvgWrapper width="32" height="32" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="displacementFilter">
                <feTurbulence numOctaves="20" type="turbulence" baseFrequency="10" result="turbulence"/> */}
                <feDisplacementMap in2="turbulence" in="SourceGraphic"
                    scale="280" xChannelSelector="R" yChannelSelector="G"/>
              </filter>
            </defs>
            <g filter= "url(#displacementFilter)">
              <circle cx="100" cy="100" r="100" fill="tomato"/>
            </g>
          </SvgWrapper>
        </Link>
      </LogoWrapper>
      <small><i>{props.date}</i></small>
      <ContactWrapper>
          <Link to={`/about`}>SOBRE MÍ</Link>
      </ContactWrapper>
    </HeaderWrapper>
  )
}

export default Header