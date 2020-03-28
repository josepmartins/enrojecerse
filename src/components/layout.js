import React from "react"
import { Link } from "gatsby"
import BaseStyles from "../components/base-styles"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            marginBottom: '2rem',
            marginTop: 0,
          }}
        >
          <Link
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0,
            display: 'none',
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            <svg width="114" height="23" viewBox="0 0 114 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="11" r="9" fill="pink" />
            </svg>
          </Link>
        </h3>
      )
    }
    return (
      <div
      >
        <BaseStyles />
        <main>{children}</main>
      </div>
    )
  }
}

export default Layout
