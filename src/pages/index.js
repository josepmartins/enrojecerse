import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"
import styled from "styled-components"

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`
const Intro = styled.div`
  flex: 1;
  padding-left: calc(5vh + 40px);
  padding-top: calc(3vh + 5px);

  @media (min-width: 1024px) {
    position: sticky;
    top: 0;
    width: 33.333%;
    display: table;
    flex: none;
    padding-right: 2.5vw;
  }
`
const IntroSmall = styled.small`
  letter-spacing: -0.05em;
  display: block;
  margin-bottom: 0.5vh;
`
const IndexLayout = styled.div`
  flex: 1;
  padding: 10vh 5vw 40vh;

  @media (min-width: 1024px) {
    padding-left: 2.5vw;
  }
`
const Article = styled.li`
  margin-bottom: 5vh;
  line-height: 5.83333vw;
  overflow: hidden;

  @media (min-width: 1024px) {
    text-align: right;
  }
`
const ArticleTitle = styled.h2`
  font-size: calc(48px + ((2 * (100vw - 720px)) / 304));
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: -2px;

  transition: opacity .1s;
  transform: translate3d(0,200%,0);
  transition-delay: 1s;
  transition: transform 1s cubic-bezier(.19,1,.22,1),opacity .3s cubic-bezier(.47,0,.745,.715);

  .visible & {
    transform: translate3d(0,0,0);
  }
`
const ArticleAuthor = styled.p`
  font-size: calc(14px + ((2 * (100vw - 720px)) / 304));
  font-style: italic;


  @media (min-width: 1024px) {
    font-size: calc(12px + ((20 * (100vw - 1200px)) / 416));
  }
`


class BlogIndex extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      document.body.classList.add('visible');
    },0);
  }
  componentWillUnmount() {
    document.body.classList.remove('visible');
  }


  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const social = data.site.siteMetadata.social
    const posts = data.allMarkdownRemark.edges


    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Todas las reseñas" />
        <Logo />
        <HomeLayout>
          <Intro>
            <IntroSmall>Bienvenidos a Enjorecerse.</IntroSmall>
            <IntroSmall>
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
              {`.`}
            </IntroSmall>
          </Intro>
          <IndexLayout>
            <ul>
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                const author = node.frontmatter.author || node.fields.slug
                return (
                  <Article key={node.fields.slug}>
                    <ArticleTitle>
                      <Link to={node.fields.slug}>{title}</Link>
                    </ArticleTitle>
                    {/* <ArticleAuthor>
                      {author}
                    </ArticleAuthor> */}
                  </Article>
                )
              })}
            </ul>
          </IndexLayout>
        </HomeLayout>
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
        social {
          instagram,
          goodreads
        }
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
            title
            description
            author
          }
        }
      }
    }
  }
`
