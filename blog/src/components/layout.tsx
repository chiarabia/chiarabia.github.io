import { Link, PageRendererProps } from "gatsby"
import React, { ReactNode } from "react"

interface Props extends PageRendererProps {
  title: string
  children: ReactNode
}

export const Layout = (props: Props) => {
  const { title, children } = props

  return (
    <div className="wrapper grid--main">
      <div className="grid__child--sidebar">
        <header className="sidebar-header">
          <h1>
            <Link to={`/`}>{title}</Link>
          </h1>
        </header>
        <nav className="sidebar-nav">
          <ul>
            <li><Link to={`/games`}>Games</Link></li>
            <li><Link to={`/projects`}>Projects</Link></li>
            <li><a href="//medium.com/@chiarabianchimani" rel="noopener noreferrer" target="_blank">Blog</a></li>
            <li><a href="//chiarabianchimani.itch.io/" rel="noopener noreferrer" target="_blank">itch.io</a></li>
            <li><a href="//github.com/chiarabia" rel="noopener noreferrer" target="_blank">GitHub</a></li>
            <li><a href="//www.linkedin.com/in/chiara-bianchimani/" rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
          </ul>
        </nav>
        <footer className="sidebar-footer">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
      <main className="grid__child--content">{children}</main>
    </div>
  )
}
