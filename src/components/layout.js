import React from "react"
import BaseStyles from "../components/base-styles"
import Header from "../components/header"
import styled from "styled-components"

const Wrapper = styled.div`
  margin: 0 var(--layout-side-margins);
`

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    const date = this.props.date ? this.props.date : null;

    return (
      <Wrapper>
        <BaseStyles />
        <Header date={date} />
        <main>{children}</main>
      </Wrapper>
    )
  }
}

export default Layout
