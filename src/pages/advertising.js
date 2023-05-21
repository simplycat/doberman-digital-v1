import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedImage from "../images/featured-image-advertising-allen-digital.svg"

const AdvertisingPage = () => (
  <Layout>
    <SEO title="Advertising" />
    <section className="py-5">
      <div className="container text-center">
        <h1>Advertising</h1>
        <img
          className="img-fluid"
          src={FeaturedImage}
          width="700"
          alt="Allen Digital can help your advertising break out from the crowd"
        />
        <p className="text-center mb-0 small text-muted">
          Good advertising is memorable, meaningful and measurable.
        </p>
        <div className="py-5">
          <p className="text-left">
            We are certified in Google Search, Google Display and Microsoft
            Advertising. Our team has experience managing over $1.5 million+ in
            digital advertising spend across Google, Microsoft Bing, LinkedIn,
            Twitter, and Reddit. We keep up with the latest trends across paid
            search and paid social to ensure you are speaking to the right
            audience at the right time, including discovering and testing new
            proprietary networks that deliver impactful results to your bottom
            line. From concept through execution, our team can help you up your
            digital advertising game.
          </p>
          <div className="py-5">
            <p>
              Advertising packages are custom built to fit your business goals.
            </p>
            <h3>Our Services Include:</h3>
            <h5>Channel Strategy</h5>
            <h5>Budgeting</h5>
            <h5>Account Implementation</h5>
            <h5>Account Optimization</h5>
            <h5>Reporting and Analysis</h5>
          </div>
          <h4 className="mb-4 text-left">
            Ask us how we helped a local non-profit restructure their Google Ads
            account to see an increase of over 384% in clicks and 898% in
            impressions year-over-year while maintaining an average
            cost-per-click (CPC) of less than $1.20.
          </h4>
          <a
            className="btn btn-primary"
            href="#mailgo"
            data-address="allendigital"
            data-domain="pm.me"
          >
            Ask Us How
          </a>
        </div>
        <a href="/work">Go Back</a>
      </div>
    </section>
  </Layout>
)

export default AdvertisingPage
