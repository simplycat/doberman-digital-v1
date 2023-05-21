import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Doberman from "../images/doberman-head-on-sparkle.svg"
import WebDesignIcon from "../images/icon-web-design.svg"
import MarketingContentIcon from "../images/icon-marketing-content.svg"
import MarketingIntegrityIcon from "../images/icon-marketing-integrity.svg"
import SaaSIcon from "../images/icon-software-as-a-service-marketing.svg"
import EquestrianSportsIcon from "../images/icon-equestrian-sports-marketing.svg"
import NonProfitIcon from "../images/icon-non-profit-marketing.svg"
import GrowthMarketingIcon from "../images/icon-day-one-optimized-websites.svg"

const WorkPage = () => (
  <Layout>
    <SEO title="Work" />
    <section className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Work</h2>
        <div className="row">
          <div className="col-md-6 text-center">
            <img
              className="img-fluid"
              src={Doberman}
              alt="Doberman Digital in work goggles"
            />
          </div>
          <div className="col-md-6">
            <p className="lead py-5">
              Like the Doberman, we are loyal, fearless and alert brand
              guardians. We build authentic digital experiences for discerning
              brands through leveraging innovative technologies and taking a hands-on
              approach to building and championing digital experiences.
            </p>
            <a
              className="btn btn-primary"
              href="#mailgo"
              data-address="allendigital"
              data-domain="pm.me"
            >
              Connect with Us
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* <section className="py-5">
      <h2 className="mb-4">Coming Soon: Female Foundry</h2>
      <p>
        A collection of female powered media outlets. Sponsorship and
        advertising opportunities available.
      </p>
      <div className="mt-3 mt-md-0">
        {/* <div className="d-flex mb-2">
          <span className="display-4 mr-4">-</span>
          <div>
            <a href="https://hertechlife.com">
              <h3>Her Tech Life</h3>
            </a>
            <p>
              A ghost written blog collective that takes a critical eye to the
              technology and human interaction - how it is destroying and
              delighting us at the exact same time. Written from the Millennial
              perspective.
            </p>
          </div>
        </div>
        <div className="d-flex mb-2">
          <span className="display-4 mr-4">-</span>
          <div>
            <a href="https://girlvsbull.com">
              <h3>Girl vs Bull</h3>
            </a>
            <p>
              Girl vs Bull is a podcast with a focus on empowering every human,
              everywhere, to be better. From the workplace to relationships and
              everything in-between, this podcast explores the ups and downs of
              a digitally evolving world at a pivotal moment in time.
            </p>
          </div>
        </div>
        {/* <div className="d-flex mb-2">
          <span className="display-4 mr-4">-</span>
          <div>
            <h4>Coming Soon</h4>
            <p>
              We are currently scouting for new, authentic, unique content to
              join our exclusive Female Foundry. All humans welcome.
            </p>
          </div>
        </div>
      </div>
    </section> */}
    <section className="py-5">
      <div className="container">
        <div>
      <h2>What We Do</h2>
      </div>
        <div className="row">
          <div className="col-md-6 p-4">
            <img src={MarketingContentIcon} alt="marketing content icon" width="100" />
            <h3 className="my-3">Content Creation</h3>
            <p>
              Building relevant content for global audiences to grow brand awareness, sentiment, and reputation.
            </p>
          </div>
          <div className="col-md-6 p-4">
            <img
              src={WebDesignIcon}
              alt="web consulting icon"
              width="100"
            />
            <h3 className="my-3">Web Consulting</h3>
            <p>
             Innovative approaches to solving for differentiated experiences.  
            </p>
          </div>
          <div className="col-md-6 p-4">
            <img
              src={MarketingIntegrityIcon}
              alt="web consulting icon"
              width="100"
            />
            <h3 className="my-3">Brand Guardianship</h3>
            <p>
             Online reputation monitoring and expert public relations services. We listen and respond so you don't have to.  
            </p>
          </div>
          <div className="col-md-6 p-4">
            <img
              src={GrowthMarketingIcon}
              alt="web consulting icon"
              width="110"
            />
            <h3 className="my-3">Growth Marketing</h3>
            <p>
             Strategizing and streamling growth intiatives to help brands level up their go-to-market game.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="py-5">
      <div className="container">
        <h2 className="mb-3 text-center">Industries of Expertise</h2>
        <div className="row mb-3">
          <div className="col-md-4 p-2 py-3 text-center">
            <a href="/software-as-a-service">
              <img
                className="img-fluid mx-auto my-4"
                src={SaaSIcon}
                width="150"
                alt="Software-as-a-Service Industry Icon"
              />
            </a>
            <a href="/software-as-a-service">
              <h4 className="my-4">Software-as-a-Service (SaaS)</h4>
            </a>
          </div>
          <div className="col-md-4 p-2 py-3 text-center">
            <a href="/non-profit">
              <img
                className="img-fluid mx-auto my-4"
                src={NonProfitIcon}
                width="150"
                alt="Non-Profit Industry Icon"
              />
            </a>
            <a href="/non-profit">
              <h4 className="my-4">Non-Profit</h4>
            </a>
          </div>
          <div className="col-md-4 p-2 py-3 text-center">
            <a href="/equestrian-sports">
              <img
                className="img-fluid mx-auto my-4"
                src={EquestrianSportsIcon}
                width="150"
                alt="Equestrian Sports Industry Icon"
              />
            </a>
            <a href="/equestrian-sports">
              <h4 className="my-4">Equestrian Sports</h4>
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default WorkPage
