import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CreditsPage = () => (
  <Layout>
    <SEO title="Image Credits" />
    <div className="py-5 container">
      <h2>Image Credits</h2>
      <p>
        Doberman Logo Design: https://www.shutterstock.com/g/takahuli.production
      </p>
      <p>Doberman Sketch Images: https://www.shutterstock.com/g/Afishka</p>
      <p>Icons from The Noun Project: https://thenounproject.com</p>
    </div>
  </Layout>
)

export default CreditsPage
