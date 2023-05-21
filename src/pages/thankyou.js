import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerAd from "../images/sporthorse-revival-banner-ad-2.jpeg"

const ThankYouPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="container-fluid">
      <section className="py-5">
        <h2 className="mb-5 text-center">Thank You.</h2>
        <div className="container text-center">
          <p>We will be in touch soon.</p>
        </div>
        <div className="container text-center py-5">
        <a href="https://sporthorserevival.com">
          <img src={BannerAd}
            alt="sporthorserevival.com advertising opportunities available banner ad - click here"
            width="1020" />
        </a>
        </div>
        <div className="container text-center py-5">
        <a className="py-5 mx-auto" href="/work">
          Go Back
        </a>
      </div>
      </section>
    </div>
  </Layout>
)

export default ThankYouPage
