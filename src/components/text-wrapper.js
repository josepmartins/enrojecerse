import React from "react"
import Observer from 'fontfaceobserver'
import TextFit from "../components/text-fit"

const bodyFont = new Observer('GT Super');

class TextWrapper extends React.Component {
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
    bodyFont.load().then(() => {
      document.documentElement.classList.add('font-ready')
    })

    return (
      this.state.isLoaded && (
        <TextFit index={this.props.index}>
          {this.props.children}
        </TextFit>
      )
    )
  }
}

export default TextWrapper
