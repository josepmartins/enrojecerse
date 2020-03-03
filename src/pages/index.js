import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Image from "gatsby-image"
import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexLayout = styled.div`
  margin: 5vh 5vh 20vh;
`
const ImageWrapper = styled.div`
  position: fixed;
  width: 33.3333%;
  bottom: 2.5vh;
  top: 2.5vh;
  left: 0;
  z-index: -1;
  transition: 1.5s ease-out;
  opacity: 0;
`

const HeaderTitle = styled.div`
  font-size: calc(56px + ((2 * (100vw - 720px)) / 304));
  line-height: 115%;
  font-style: italic;
  letter-spacing: -1px;
  text-align: center;
  margin-bottom: 10vh;

  & > a{
    text-decoration: none;
  }

  &:hover{
    ${ImageWrapper}{
      opacity: 1;
      transition: 0.25s ease;
    }
  }

  @media (min-width: 1024px) {
    font-size: calc(64px + ((30 * (100vw - 1200px)) / 416));
  }
`
const ArticleWrapper = styled.article`
`
const ArticleList = styled.div`
  ${ArticleWrapper}:nth-child(2n + 2) {
    ${ImageWrapper}{left: 33.3333%;}
  }

  ${ArticleWrapper}:nth-child(3n + 3) {
    ${ImageWrapper}{left: 66.6666%;}
  }
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Todas las reseñas" />
        {/* <Bio /> */}
        <IndexLayout>
          <Logo />
          <ArticleList>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <ArticleWrapper key={node.fields.slug}>
                  <header>
                    <HeaderTitle>
                      <ImageWrapper>
                        {!!node.frontmatter.cover ?
                          <Image
                            fixed={node.frontmatter.cover.childImageSharp.sizes}
                            style={{
                              width: '100%',
                              height: '100%',
                            }}
                          /> : null}
                      </ImageWrapper>
                      <Link to={node.fields.slug}>
                        {title}
                      </Link>
                    </HeaderTitle>
                  </header>
                  {/* <small>{node.frontmatter.date}</small> */}
                  {/* <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </section> */}
                </ArticleWrapper>
              )
            })}
          </ArticleList>
        </IndexLayout>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            cover {
              publicURL
              childImageSharp {
                sizes(maxWidth: 1000) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
