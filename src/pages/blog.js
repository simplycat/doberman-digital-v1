import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DobermanLayingDown from "../images/doberman-lay-down-sparkle.svg"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
      <div className="container-fluid text-center">
      <h1>Blog Coming Soon</h1>
      <img
        className="img-fluid mt-4 mt-md-0"
        src={DobermanLayingDown}
        alt="Doberman Digital laying downn"
        width="400"
      />
      <p>Check back here soon.</p>
    </div>
  </Layout>
)

export default BlogPage
