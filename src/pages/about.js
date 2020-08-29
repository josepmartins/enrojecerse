import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TextHero from "../components/text-hero"
import TextContent  from "../components/text-content"
import Image from "gatsby-image"
import styled from "styled-components"

const ContentWrapper = styled.div`
  padding-top: 2vh;
  padding-bottom: 15vh;

  @media (min-width: 1024px) {
    max-width: calc((100/3) * 2 * 1%);
  }
`

class About extends React.Component {
  render() {
    const { data } = this.props
    const social = data.site.siteMetadata.social

    return (
      <Layout date="Hola, bienvenidas a">
        <SEO
          title="Sobre mí"
          image={data.fileName.childImageSharp.fluid}
        />
        <TextHero tag="h1">ENROJECERSE</TextHero>
        <Image fluid={data.fileName.childImageSharp.fluid} alt="" />
        <ContentWrapper>
          <TextContent>
            <p>Me llamo Laura. Y aunque nunca me han gustado las descripciones personales, aquí estoy: hecha un ovillo, pasando las páginas de cualquier libro, en el sofá de mi casa. Acompañada de un café caliente. “¿Siempre?”, te preguntarás. “Siempre que leas esto”, te responderé. Aunque, a decir verdad, a veces me levanto y cocino algún dulce. Otras -no tantas otras-, escribo. Y aquí, en esta parte del mundo, es donde encontrarás el resultado de este retórico desorden. Soy libra, así que… bienvenido a mi relatividad.</p>
            <small>
              También me podéis encontrar y seguir en
              {' '}
              <a target="_blank" rel="noopener noreferrer" href={`https://instagram.com/${social.instagram}`}>
                Instagram
              </a>
              {' o '}
              <a target="_blank" rel="noopener noreferrer" href={`https://goodreads.com/${social.goodreads}`}>
                Goodreads
              </a>
              {'.'}
            </small>
          </TextContent>
        </ContentWrapper>
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    fileName: file(relativePath: { eq: "enrojecerse.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        social {
          instagram,
          goodreads
        }
      }
    }
  }
`