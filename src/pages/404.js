import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Doberman from "../images/doberman-wearing-3d-glasses.svg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container-fluid text-center">
      <h1>404: Not Found</h1>
      <img
        className="img-fluid mt-4 mt-md-0"
        src={Doberman}
        alt="404 Allen Digital Doberman"
        width="400"
      />
      <p>Ruh Roh.</p>
    </div>
  </Layout>
)

export default NotFoundPage
