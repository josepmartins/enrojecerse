import React from 'react';
import styled from "styled-components"

const TextWrapper = styled.div`
  p:first-child {
    text-indent: 0;
  }

  p {
    font-size: calc(24px + ((1 * (100vw - 720px)) / 304));
    line-height: 145%;
    text-indent: 2em;
    margin-bottom: 2vh;

    @media (min-width: 1024px) {
      font-size: calc(20px + ((8 * (100vw - 1024px)) / 416));
      line-height: 120%;
    }
  }

  a {
    font-weight: 300;
    position relative;
    font-style: italic;

    &:after{
      content: "";
      position: absolute;
      z-index: 0;
      right: 0;
      width: 0;
      bottom: 37.5%;
      height: 1px;
      transition-property: width;
      transition-duration: .35s;
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

function TextContent(props) {
  return (
    <TextWrapper >
      {props.children}
    </TextWrapper>
  )
}

export default TextContent