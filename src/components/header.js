import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  padding: 3vh 16px 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap:wrap;

  @media (min-width: 1024px) {
    padding: 3vh 50px 0;
  }

`
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  content:'';
  display:inline-block;
  flex: 2;
  flex-wrap:wrap;

  * + * { margin-left: 8px; }
`
const ContactWrapper = styled.div`
  display: flex;
  font-size: 12px;
  text-transform: uppercase;
  content:'';
  flex: 2;
  flex-wrap:wrap;
  justify-content: flex-end;

  * + * { margin-left: 12px; }

  & a:hover {
    text-decoration: underline;
  }
`
const SvgWrapper = styled.svg`
  border-radius: 50px;
`

const Header = (props) => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          social {
            instagram,
            goodreads
          }
        }
      }
    }
  `)
  const social = data.site.siteMetadata.social

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Link to={`/`}>
          <SvgWrapper width="40" height="40" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
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
      </LogoWrapper>
      <small><i>{props.date}</i></small>
      <ContactWrapper>
          <a target="_blank" rel="noopener noreferrer" href={`https://instagram.com/${social.instagram}`}>
            Instagram
          </a>
          <a target="_blank" rel="noopener noreferrer" href={`https://goodreads.com/${social.goodreads}`}>
            Goodreads
          </a>
      </ContactWrapper>
    </HeaderWrapper>
  )
}

export default Header