import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const FemaleFoundryPage = () => (
  <Layout>
    <SEO title="Female Foundry" />
    <div className="py-5 container">
      <h1 className="text-center">Female Foundry</h1>
      <p>
        The Female Foundry is an exclusive network of female focused websites,
        intiatives and companies on the same mission: to help other females.
        Advertising and sponsorship opportunities available. Please contact
        allendigital@protonmail.com
      </p>
      <ul>
        <li>
          <a href="https://hertechlife.com">Her Tech Life</a>
        </li>
        <li>
          <a href="https://girlvsbull.com">Girl vs Bull</a>
        </li>
        <li>Announcing Soon</li>
      </ul>
    </div>
  </Layout>
)

export default FemaleFoundryPage
