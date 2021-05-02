import { graphql, Link, PageRendererProps } from "gatsby"
import React from "react"
import { Bio } from "../components/bio"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Query, SitePageContext } from "../graphql-types"

interface Props extends PageRendererProps {
  pageContext: SitePageContext
  data: Query
}

const BlogPostTemplate = (props: Props) => {
  const data = props.data!
  const post = data.markdownRemark!
  const excerpt = post.excerpt!
  const frontmatter = post.frontmatter!
  const html = post.html!
  const siteTitle = data.site!.siteMetadata!.title!
  // const { previous, next } = props.pageContext

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={frontmatter.title!}
        description={frontmatter.description || excerpt}
      />
      <h1>{post.frontmatter!.title}</h1>
      <span>{frontmatter.date}</span>
      <div dangerouslySetInnerHTML={{ __html: html }} />
{/*       <div>
        <li>
          {previous && (
            <Link to={previous.fields!.slug!} rel="prev">
              ← {previous.frontmatter!.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields!.slug!} rel="next">
              {next.frontmatter!.title} →
            </Link>
          )}
        </li>
      </div> */}
    </Layout>
  )
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
      }
    }
  }
`
