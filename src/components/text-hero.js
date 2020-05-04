import React from 'react';
import styled from "styled-components"
import useFitText from '../utils/use-text-fit'

const TextWrapper = styled.div`
  width: 100%;
  line-height: 0.95;
  font-family: 'GT Super';
  white-space: nowrap;
  overflow: hidden;

  & a {
    display: block;
    width: 100%;
  }
`

function TextHero(props) {
  const { fontSize, ref } = useFitText();
  return (
    <TextWrapper>
      <div ref={ref} style={{ fontSize, width: '100%' }}>
        {props.children}
      </div>
    </TextWrapper>
  )
}

export default TextHero