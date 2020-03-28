import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"
import Image from "gatsby-image"
import styled from "styled-components"

const Date = styled.small`
  position: fixed;
  top: 3vh;
  right: 3vh;
  z-index: 999;
`
const Header = styled.header`
  padding-bottom: 10vh;
`
const Content = styled.div`
  width: 90vw;
  max-width: 50rem;
  margin: 0 auto;
  padding-bottom: 20vh;

  @media (min-width: 1024px) {
    width: 50vw;
  }
`
const HeaderContent = styled.div`
  text-align: center;
  padding-top: 15vh;

  @media (min-width: 1024px) {
    position: sticky;
    top: 0;
  }
`
const HeaderTitle = styled.div`
  font-size: calc(48px + ((2 * (100vw - 720px)) / 304));
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: -2px;
  margin: 0 auto;
  width: 80vw;

  @media (min-width: 1024px) {
    font-size: calc(88px + ((30 * (100vw - 1200px)) / 416));
    width: 80vw;
  }
`
const HeaderSubTitle = styled.div`
  font-size: calc(14px + ((2 * (100vw - 720px)) / 304));
  font-style: italic;
  margin: 0 auto;
  width: 80vw;

  @media (min-width: 1024px) {
    width: 50vw;
    font-size: calc(12px + ((30 * (100vw - 1200px)) / 416));
  }
`
const HeaderImage = styled.div`
  width: 80vw;
  height: 50vh;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
  margin-top: 5vh;

  @media (min-width: 1024px) {
    height: 80vh;
    width: 50vw;
    position: relative;
    z-index: -1;
    margin-bottom: 30vh;
  }
`
const Section = styled.section`
  p {
    font-size: calc(20px + ((1 * (100vw - 720px)) / 304));
    margin-bottom: 3vh;
    line-height: 145%;

    @media (min-width: 1024px) {
      font-size: calc(20px + ((8 * (100vw - 1024px)) / 416));
      margin-bottom: 5vh;
    }
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
        <Logo />
        <Date>{post.frontmatter.date}</Date>
        <Header>
          <HeaderContent>
            <HeaderTitle> {post.frontmatter.title}</HeaderTitle>
            <HeaderSubTitle>{post.frontmatter.author}</HeaderSubTitle>
          </HeaderContent>
          <HeaderImage>
            {!!post.frontmatter.cover ?
              <Image
                fixed={post.frontmatter.cover.childImageSharp.sizes}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              /> : null}
          </HeaderImage>
        </Header>


        <Content>
          <Section dangerouslySetInnerHTML={{ __html: post.html }} />
          <Bio />
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
        </Content>

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
        date(formatString: "D MMMM YYYY", locale: "es")
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
