import React from 'react';
import styled, { keyframes } from "styled-components"
import { Textfit } from 'react-textfit';

const fadeUp = keyframes`
  from {
    transform: translate3d(0,150%,0);
  }

  to {
    transform: translate3d(0,0,0);
  }
`
const TextHeroWrapper = styled.h2`
  white-space: nowrap;
  width: 100%;
  line-height: 0.85;
  overflow: hidden;

  .font-ready & div {
    animation: ${fadeUp} 750ms cubic-bezier(0.46, 0.99, 0.73, 0.99);
    display: block;
    animation-fill-mode: backwards;
    animation-delay: ${p => p.index * 75}ms;
  }
  & a {
    display: block;
  }
`

function TextHero(props) {
  return (
    <TextHeroWrapper index={props.index} style={{fontFamily: 'GT Super'}}>
      <Textfit mode="single" max={500}>
        {props.children}
      </Textfit>
    </TextHeroWrapper>

  )
}

export default TextHero