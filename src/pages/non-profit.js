import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedImage from "../images/icon-non-profit-marketing.svg"

const NonProfitPage = () => (
  <Layout>
    <SEO title="Non-Profit Marketing and Advertising" />
    <div className="py-5 container text-center">
      <h1 className="text-center">Non-Profit</h1>
      <img
        className="img-fluid py-5"
        src={FeaturedImage}
        width="200"
        alt="Non-Profit industry icon"
      />
      <p className="text-left py-5">
        Cat Allen has been involved with non-profits since 2014. With a passion
        for helping humans, horses and canines, Cat has served as both staff and
        volunteer for a variety of 501(c)3 charities. 
        <p>
        She has experience:
        <ul>
          <li>Executed successful email campaign strategies</li>
          <li>Strategized and led social media grassroots initiatives</li>
          <li>Successfully rebuilt digital advertising efforts to increase conversion rates</li>
          <li>Increased search engine visibility through a variety of search engine opitmization (SEO) techniques</li>
        </ul>
        </p>
        Currently accepting new clients.
      </p>
      <div className="text-center">
        <a className="btn btn-primary" href="/contact">
          Become a Client
        </a>
      </div>
      <div className="text-left py-5">
        <h2>Non-Profits We Believe In</h2>
        <ul>
          <li>
            <a href="https://equest.org">Equest - Humans. Horses. Hope.</a>
          </li>
          <li>
            <a href="https://www.ilehc.org/">
              Illinois Equine Humane Center - Every horse has an owner, every
              owner has a responsibility.
            </a>
          </li>
          <li>
            <a href="https://www.thelovepitrescue.org/">
              The Love Pit - Save the Pit Bull.
            </a>
          </li>
        </ul>
      </div>
      <p className="py-5">
        <a href="/work">Go Back</a>
      </p>
    </div>
  </Layout>
)

export default NonProfitPage
