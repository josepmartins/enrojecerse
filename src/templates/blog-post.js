import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"
import Image from "gatsby-image"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  margin-top: 5vh;

  @media (min-width: 1024px) {
    position: sticky;
    top: 18vh;
    margin-top: 18vh;
  }

`

const HeaderTitle = styled.div`
  font-size: calc(56px + ((2 * (100vw - 720px)) / 304));
  line-height: 115%;
  font-style: italic;
  letter-spacing: -1px;

  @media (min-width: 1024px) {
    font-size: calc(64px + ((30 * (100vw - 1200px)) / 416));
  }
`
const HeaderSubTitle = styled.div`
  font-size: calc(14px + ((2 * (100vw - 720px)) / 304));
  font-style: italic;
  margin-left: 5vw;
  margin-top: 2vh;

  @media (min-width: 1024px) {
    font-size: calc(12px + ((30 * (100vw - 1200px)) / 416));
  }
`

const Container = styled.div`
  @media (min-width: 1024px) {
    display: flex;
  }
`
const ContainerCover = styled.div`
  width: 100%;
  height: 40vh;
  margin-bottom: 15vh;

  @media (min-width: 1024px) {
    height: 50vh;
  }
`
const ContainerContent = styled.article`
  padding: 4vh 10vh 4vh 0;

  @media (min-width: 1024px) {
    width: 50vw;
  }

  p {
    font-size: calc(20px + ((1 * (100vw - 720px)) / 304));
    margin-bottom: 3vh;
    line-height: 145%;

    @media (min-width: 1024px) {
      font-size: calc(20px + ((8 * (100vw - 1024px)) / 416));
      margin-bottom: 7vh;
    }
  }

  p:first-child:first-letter {
    font-size: 250%;
  }
`

const ContainerTitle = styled.article`
  flex: 1;
  padding: 0vw 6vw 5vh 5vh;

  @media (min-width: 1024px) {
    position: sticky;
    top: 0;
  }
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.image}
          description={post.frontmatter.description || post.excerpt}
        />
        <Container>
          <ContainerTitle>
            <HeaderWrapper>
              <Logo />

              <HeaderTitle>
                {post.frontmatter.title}
              </HeaderTitle>
              <HeaderSubTitle>
                {post.frontmatter.author}
              </HeaderSubTitle>
            </HeaderWrapper>
            {/* <section dangerouslySetInnerHTML={{ __html: post.html }} />
            <footer>
              <Bio />
            </footer>
            <nav>
              <ul
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0,
                }}
              >
                <li>
                  {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                      ← {previous.frontmatter.title}
                    </Link>
                  )}
                </li>
                <li>
                  {next && (
                    <Link to={next.fields.slug} rel="next">
                      {next.frontmatter.title} →
                    </Link>
                  )}
                </li>
              </ul>
            </nav> */}
            </ContainerTitle>
            <ContainerContent>
              <ContainerCover>
              {!!post.frontmatter.cover ?
                <Image
                  fixed={post.frontmatter.cover.childImageSharp.sizes}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                /> : null}
              </ContainerCover>
              <section dangerouslySetInnerHTML={{ __html: post.html }} />
                <footer>
                  <Bio />
                </footer>
                <nav>
                  <ul
                    style={{
                      display: `flex`,
                      flexWrap: `wrap`,
                      justifyContent: `space-between`,
                      listStyle: `none`,
                      padding: 0,
                    }}
                  >
                    <li>
                      {previous && (
                        <Link to={previous.fields.slug} rel="prev">
                          ← {previous.frontmatter.title}
                        </Link>
                      )}
                    </li>
                    <li>
                      {next && (
                        <Link to={next.fields.slug} rel="next">
                          {next.frontmatter.title} →
                        </Link>
                      )}
                    </li>
                  </ul>
                </nav>
            </ContainerContent>
          </Container>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
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
`
