import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"
import styled from "styled-components"


const Logo = styled.svg`
  border-radius: 50%;
  margin-bottom: 5vh;
`

const HeaderWrapper = styled.header`
  margin-top: 18vh;
  margin-bottom: 18vh;
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
  height: 25vh;
  padding: 2vh 10vh 2vh 0;

  @media (min-width: 1024px) {    
    height: 100vh;
    width: 50vw;
    position: sticky;
    top: 0;
  }
`
const ContainerContent = styled.article`
  flex: 1;
  padding: 0vw 6vw 5vh 5vh;
  
  p {
    font-size: calc(20px + ((1 * (100vw - 720px)) / 304));
    margin-bottom: 3vh;
    line-height: 145%;
    
    @media (min-width: 1024px) {    
      font-size: calc(20px + ((8 * (100vw - 1024px)) / 416));
      margin-bottom: 7vh;
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
        <Container>
          <ContainerContent>
            <HeaderWrapper>
              <Link to={`/`}>
                <Logo width="50" height="50" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
                  <filter id="displacementFilter">
                    <feTurbulence type="turbulence" baseFrequency="0.6"
                        numOctaves="50" result="turbulence"/>
                    <feDisplacementMap in2="turbulence" in="SourceGraphic"
                        scale="400" xChannelSelector="R" yChannelSelector="G"/>
                  </filter>
                  <circle cx="100" cy="100" r="120" fill="pink" style={{filter: "url(#displacementFilter)"}}/>
                </Logo>
              </Link>


              <HeaderTitle>
                {post.frontmatter.title}
              </HeaderTitle>
              <HeaderSubTitle>
                {post.frontmatter.author}
              </HeaderSubTitle>
            </HeaderWrapper>
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
