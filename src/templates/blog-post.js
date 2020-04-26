import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import TextWrapper  from "../components/text-wrapper"
import styled from "styled-components"

const Wrapper = styled.div`
  @media (min-width: 1024px) {
    display: flex;
  }
`
const Header = styled.div`
  flex: 1;
  min-width: 50%;
`
const Content = styled.div`
  flex: 1;
  min-width: 50%;
  margin-bottom: 50vh;

  @media (min-width: 1024px) {
    margin-top: 16vh;
    padding: 5vh 0;
    padding-left: 32px;
  }
`
const HeaderContent = styled.div`
  margin-top: 12vh;
  margin-bottom: 5vh;

  @media (min-width: 1024px) {
    height: 40vh;
    margin-bottom: 0;
  }
`
const HeaderImage = styled.div`
  height: 66vh;

  @media (min-width: 1024px) {
    height: 100vh;
    position: sticky;
    padding: 5vh 0;
    top: 0;
  }
`
const Section = styled.section`
  text-align: justify;
  margin-bottom: 50vh;

  p:first-child {
    text-indent: 0;
  }

  p {
    font-size: calc(24px + ((1 * (100vw - 720px)) / 304));
    line-height: 145%;
    text-indent: 2em;

    @media (min-width: 1024px) {
      font-size: calc(20px + ((8 * (100vw - 1024px)) / 416));
      line-height: 120%;
    }
  }
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle} date={post.frontmatter.date}>
        <SEO
          title={post.frontmatter.image}
          description={post.frontmatter.description || post.excerpt}
        />
        <HeaderContent>
          <TextWrapper index={0}>{post.frontmatter.title.toUpperCase()}</TextWrapper>
          <TextWrapper index={1}>{post.frontmatter.author.toUpperCase()}</TextWrapper>
        </HeaderContent>
        <Wrapper>

          <Header>
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
            <nav>
              <i>Te puede interesar</i>
              {previous && (
                <TextWrapper>
                  <Link to={previous.fields.slug} rel="prev">{previous.frontmatter.title.toUpperCase()} </Link>
                </TextWrapper>
              )}
              {next && (
                <TextWrapper>
                  <Link to={next.fields.slug} rel="next">{next.frontmatter.title.toUpperCase()}</Link>
                </TextWrapper>
              )}
            </nav>
          </Content>

        </Wrapper>

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
