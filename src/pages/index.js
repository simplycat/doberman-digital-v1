import React from "react"

import Layout from "../components/layout"
import HeroImage from "../images/doberman-head-on-sparkle.svg"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="py-5" id="container">
      <div className="row">
        <div className="col-md-6 my-auto">
          <h1 className="display-3">Hands-on technical marketing</h1>
          <p className="lead text-muted mb-4">
          A bespoke digital agency creating thoughtful, engaging experiences for distinguished brands. 
          </p>
          <a className="btn btn-primary" href="/philosophy">
            Our Philosophy
          </a>
        </div>
        <div className="col-md-6">
          <img
            className="img-fluid mt-4 mt-md-0"
            src={HeroImage}
            alt="Doberman Digital is a Doberman Unicorn - Banishing the myth that you can't have great digital marketing while protecting privacy at the same time."
          />
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
