import { graphql, Link, PageRendererProps, useStaticQuery } from "gatsby"
import React from "react"
import { Bio } from "../components/bio"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { MarkdownRemark } from "../graphql-types"

type Props = PageRendererProps

const BlogIndex = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {fileAbsolutePath: {glob: "**/games/*/*.md"}}
        ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM, YYYY")
              title
              tags
              description
            }
          }
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Games"
        keywords={[`blog`, `game design`, `game development`]}
      />
      <h1>Games</h1>
      {posts.map(({ node }: { node: MarkdownRemark }) => {
        const frontmatter = node!.frontmatter!
        const fields = node!.fields!
        const slug = fields.slug!
        const excerpt = node!.excerpt!
        const tags = frontmatter.tags!

        const title = frontmatter.title || fields.slug
        return (
          <div key={slug}>
            <h2>
              <Link to={slug}>{title}</Link>
            </h2>
            <small className="post-date">{frontmatter.date}</small>
            <small className="post-tags">{tags}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: frontmatter.description || excerpt,
              }}
            />
          </div>
        )
      })}
    </Layout>
  )
}

export default BlogIndex
