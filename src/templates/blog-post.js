import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`
const ContainerCover = styled.div`
  width: 100vh;
  height: 100vh;
  position: sticky;
  top: 0;
`
const ContainerContent = styled.article`
  flex: 1;
  padding: 4vw;
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
            <ContainerContent>
              <header>  
                <h1
                  style={{
                    marginTop: '2rem',
                    marginBottom: 0,
                  }}
                >
                  {post.frontmatter.title}
                </h1>
                <p
                  style={{
                    display: `block`,
                    marginBottom: '2rem',
                  }}
                >
                  {post.frontmatter.date}
                </p>
              </header>
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
        description
        cover {
          publicURL
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
