import React from 'react';
import { Textfit } from 'react-textfit';
import styled from "styled-components"

const TextHeroWrapper = styled.h2`
  white-space: nowrap;
  width: 100%;
  line-height: 0.85;
  overflow: hidden;

  & a {
    display: block;
  }
`

function TextHero(props) {
  return (
    <TextHeroWrapper style={{fontFamily: 'GT Super'}}>
      <Textfit mode="single" min={10} max={500}>
        {props.children}
      </Textfit>
    </TextHeroWrapper>
  )
}

export default TextHero