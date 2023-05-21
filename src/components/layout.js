/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Twitter from "../images/twitter.svg"
import "../styles/bootstrap-theme.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <Header
        menuLinks={data.site.siteMetadata.menuLinks}
        siteTitle={data.site.siteMetadata.title}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer className="py-3">
          <div className="d-flex justify-content-center align-items-center flex-column">
            {/* <div className="d-flex mb-3">
              <a href="https://twitter.com/allendigitalinc">
                <img className="mr-3" src={Twitter} alt="twitter" />
              </a>
            </div> */}
            <p className="text-center mb-0 small text-muted">
              © {new Date().getFullYear()}, Doberman Digital Inc. v1.1. All Rights Reserved. {""}
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
