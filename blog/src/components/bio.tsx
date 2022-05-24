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
      <p> I'm a Computer Engineer graduated at 
        PoliMi (Polytechnic University of Milan). My main topics of interest are: 
        <li className="bio-list">Game Design</li>
        <li className="bio-list">Ethics in Computer Science</li>
        <li className="bio-list">Industrial Automation</li>
      </p>
      <p>I speak Italian, English and I'm studying Chinese.</p>
      <p>I have participated in game jams in the role of team leader, designer and programmer.</p>
      <p>You can contact me at: bianca.chiarab (at) gmail (dot) com</p> 
    </>
  )
}
