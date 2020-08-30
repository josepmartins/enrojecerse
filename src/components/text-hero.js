import React from 'react';
import styled from "styled-components"
import useFitText from '../utils/use-text-fit'
import { Transition } from 'react-transition-group'

const Title = styled.h2`
  text-edge: cap alphabetic;
  leading-trim: both;
  padding: 5px 0;
  line-height: 0.825em;

  &::before {
    content: "";
    margin-top: -0.0044em;
    display: block;
    height: 0;
  }

  &::after {
    content: "";
    margin-bottom: -0.0761em;
    display: block;
    height: 0;
  }
`

const TextWrapper = styled.div`
  width: 100%;
  font-family: 'Bon Vivant';
  white-space: nowrap;

  & a {
    display: block;
    width: 100%;
    position relative;

    &:after{
      content: "";
      position: absolute;
      z-index: 0;
      right: 0;
      width: 0;
      bottom: 50%;
      height: 2px;
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

  ${({ isAnimated }) => isAnimated && `
  `}
`

const AnimateWrapper = styled.div`
  transition: 0.25s ease-in;
  opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
`

function TextHero(props) {
  const { fontSize, ref } = useFitText();
  return (
    <TextWrapper isAnimated={props.isAnimated}>
          <Transition timeout={0} appear={true} in={true}>
              {state => (
                <AnimateWrapper state={state}>
                  <Title as={props.tag} ref={ref} style={{ fontSize, width: '100%' }}>
                    {props.children}
                  </Title>
                </AnimateWrapper>
              )}
          </Transition>
    </TextWrapper>
  )
}

export default TextHero