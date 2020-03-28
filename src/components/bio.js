import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const BioWrapper = styled.div`
  margin: 10vh 0 25vh;
  display: flex;
  align-items: center;
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/avatar.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            instagram,
            goodreads
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <BioWrapper>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: '1rem',
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `50px`,
        }}
      />
      <small>
        Soy Laura y me encanta leer y escribir. Puedes seguirme en
        {` `}
        <a href={`https://instagram.com/${social.instagram}`}>
          Instagram
        </a>
        {` `}
        y
        {` `}
        <a href={`https://goodreads.com/${social.goodreads}`}>
          Goodreads
        </a>
      </small>
    </BioWrapper>
  )
}

export default Bio
