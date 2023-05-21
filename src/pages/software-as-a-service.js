import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedImage from "../images/icon-software-as-a-service-marketing.svg"

const SaaSPage = () => (
  <Layout>
    <SEO title="Software-as-a-Service (SaaS) Marketing and Advertising" />
    <div className="py-5 container text-center">
      <h1 className="text-center">Software-as-a-Service (SaaS)</h1>
      <img
        className="img-fluid py-5"
        src={FeaturedImage}
        width="200"
        alt="Software-as-a-Service icon"
      />
      <p className="text-left">
        Cat Allen has served on a variety of in-house teams from digital to
        product and everything in-between. She has hands-on experience
        developing strategy, go-to-market, advertising and inbound marketing
        efforts that have led to significant increases in Annual Recurring
        Revenue (ARR) during rapid growth phases of small startups, both
        remotely and in Dallas, Texas. Cat has experience from the board room to
        the foundational systems that compromise marketing stacks, including but
        not limited to: Salesforce, Pardot, HubSpot, Sisense, Figma, and
        Instapage. Having built full stack web applications from scratch in four
        different languages (Python, Ruby on Rails, MEAN and React) she takes a
        unique approach when crafting sustainable stacks for small to large
        scale customers in a variety of lifecycle stages. 
      </p>
      <h4>
        Not currently
        accepting new clients.</h4>
      <div className="text-center py-5">
        <a className="text-center py-5" href="/work">
          Go Back
        </a>
      </div>
    </div>
  </Layout>
)

export default SaaSPage
