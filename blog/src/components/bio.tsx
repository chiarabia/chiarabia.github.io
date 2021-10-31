/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata

  return (
    <>
      <h1>Bio</h1>
      <p>I'm Chiara Bianchimani.</p>
      <p> I'm currently doing a Bachelor Degree in Computer Engineering at 
        PoliMi (Polytechnic University of Milan). My main topics of interest are: 
        <li className="bio-list">Game Design</li>
        <li className="bio-list">Ethics in Computer Science</li>
        <li className="bio-list">Industrial Automation</li>
      </p>
      <p>I speak Italian, English, beginner level of Norwegian and I'm studying Chinese (HSK3 level).</p>
      <p>My hobbies are language learning and crafting, especially artistic journaling.</p>
      <p>You can contact me at: bianca.chiarab (at) gmail (dot) com</p> 
    </>
  )
}
