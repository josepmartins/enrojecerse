import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import TextHero  from "../components/text-hero"
import TextContent  from "../components/text-content"
import styled from "styled-components"

const Wrapper = styled.div`
  @media (min-width: 1024px) {
    display: flex;
  }
`
const Hint = styled.i`
  display: block;
  margin-bottom: 1vh;
`
const Header = styled.div`
  flex: 1;
  min-width: 50%;
`
const Content = styled.div`
  flex: 1;
  padding-top: 5vh;
  padding-bottom: 5vh;

  @media (min-width: 1024px) {
    padding-left: 32px;
    min-width: 50%;
  }
`
const Footer = styled.footer`
`

const Hero = styled.div`
  padding-bottom: 2vh;
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

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle} date={post.frontmatter.date}>
        <SEO
          title={post.frontmatter.title + ' de ' + post.frontmatter.author}
          description={post.frontmatter.description || post.excerpt}
          image={post.frontmatter.cover.publicURL}
        />
        <Hero>
          <TextHero tag="h1">{post.frontmatter.title.toUpperCase()}</TextHero>
          <TextHero>{post.frontmatter.author.toUpperCase()}</TextHero>
        </Hero>
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
            <TextContent>
              <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </TextContent>
          </Content>
        </Wrapper>
        <Footer>
          <Hint>Otras reseñas que te pueden interesar</Hint>
          {previous && (
            <TextHero>
              <Link to={previous.fields.slug} rel="prev">{previous.frontmatter.title.toUpperCase()} </Link>
            </TextHero>
          )}
          {next && (
            <TextHero>
              <Link to={next.fields.slug} rel="next">{next.frontmatter.title.toUpperCase()}</Link>
            </TextHero>
          )}
        </Footer>
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
