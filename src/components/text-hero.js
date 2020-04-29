import React from 'react';
import Observer from 'fontfaceobserver'
import { Textfit } from 'react-textfit';
import styled, { keyframes } from "styled-components"

const bodyFont = new Observer('GT Super');

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
    animation-delay: ${p => ( p.index + 1 ) * 75}ms;
  }
  & a {
    display: block;
  }
`

class TextHero extends React.Component {
  state = { isLoaded: false };

  componentDidMount() {
    bodyFont.load().then(() =>
      setTimeout(() => {
          this.setState(() => {
            return { isLoaded: true };
          })
        }, 200)
    )
  }

  render() {
    return (
      this.state.isLoaded && (
        <TextHeroWrapper index={this.props.index} style={{fontFamily: 'GT Super'}}>
          <Textfit mode="single" max={500}>
            {this.props.children}
          </Textfit>
        </TextHeroWrapper>
      )
    )
  }
}

export default TextHero