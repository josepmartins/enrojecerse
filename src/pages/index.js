import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TextWrapper from "../components/text-wrapper"
import styled from "styled-components"

const ArticleList = styled.ul`
  margin: 12vh 0 20vh;

  &:hover a{
    opacity: 0.2;
    transition: 0.2s;
  }
  &:hover a:hover {
    opacity: 1;
  }
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout>

        <SEO title="Todas las reseñas" />
        <ArticleList>
          {posts.map(({ node }, index) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <li key={node.fields.slug}>
                <TextWrapper index={index}>
                  <Link to={node.fields.slug}>{title.toUpperCase()}</Link>
                </TextWrapper>
              </li>
            )
          })}
        </ArticleList>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
