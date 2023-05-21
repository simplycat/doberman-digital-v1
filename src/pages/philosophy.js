import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Check from "../images/check.svg"
import SustainableIcon from "../images/icon-sustainable-marketing.svg"
import QualityIcon from "../images/icon-marketing-quality.svg"
import PrivacyIcon from "../images/icon-privacy-first-marketing.svg"
import BowtieDoberman from "../images/doberman-dreaming-sparkle.svg"

const PhilosophyPage = () => (
  <Layout>
    <SEO title="Philosophy" />
    <section className="py-5">
      <div className="container text-center">
        <h2>Our Philosophy</h2>
        <img
          className="img-fluid"
          src={BowtieDoberman}
          alt="Doberman Digital with a bowtie"
          width="500"
        />
        <div className="row">
          <div className="col-md-6 col-lg-3 p-4">
            <img
              src={Check}
              alt="placeholder/icons/check.svg"
            ></img>
            <p className="checkmark."></p>
            <h3 className="my-3">Privacy Focused</h3>
            <p>
              Say goodbye to unnecessary data risk. On a mission to make cookie consents and invasive marketing a thing of the
              past.
            </p>
          </div>
          <div className="col-md-6 col-lg-3 p-4">
            <img
              src={Check}
              alt="placeholder/icons/check.svg"
            ></img>
            <p className="checkmark."></p>
            <h3 className="my-3">Delightful Experiences</h3>
            <p>
              Great User Experience (UX) starts with great design, which is how we build delightful experiences that leave a lasting impression.
            </p>
          </div>
          <div className="col-md-6 col-lg-3 p-4">
            <img
              src={Check}
              alt="placeholder/icons/check.svg"
            ></img>
            <p className="checkmark."></p>
            <h3 className="my-3">Sustainable Programs</h3>
            <p>
              No one wants the pain of digital maintenance. We design experiences with simplicity and longevity to make it easy.
            </p>
          </div>
          <div className="col-md-6 col-lg-3 p-4">
            <img
              src={Check}
              alt="placeholder/icons/check.svg"
            ></img>
            <p className="checkmark."></p>
            <h3 className="my-3">Authentic Content</h3>
            <p>
              We are big picture thinkers who pay attention to trends. We engage in PR activies to help brands make a lasting impression the moment it matters.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className="text-center">
      <a className="btn btn-primary" href="/work">
        What We Do
      </a>
    </div>
    <section className="py-5">
      <div className="container text-center">
        <h2 className="mb-4">We Make Marketing that Matters.</h2>
        <p className="lead mb-5">
        At Doberman Digital, we help you stay true to your brand. We are familiar with how to stay true to your brand while still delivering work that feels fresh and makes market moves. We built forward leaning experiences that respect privacy, are built secure-by-design, and help our customers consistently outperform the competition.
        </p>
      </div>
      <div>
        <div className="row align-items-center text-md-left mb-5">
          <div className="col-md-6 order-1 order-md-0">
            <img
              className="img-fluid"
              src={PrivacyIcon}
              alt="privacy focused digital marketing icon"
              width="200"
            />
          </div>
          <div className="col-md-6 mb-2 mb-md-0">
            <span className="display-3 mb-2">01</span>
            <h3 className="mb-4">Privacy Matters</h3>
            <p>
              We recognize the pivotal shift in
              the digital landscape where consumers are becoming increasingly aware of
              invasive marketing technologies. We are the pioneers in
              privacy-focused marketing initiatives and pride ourselves on being committed to doing the right thing. We believe everyone has the right to
              sanctuary.
            </p>
          </div>
        </div>
        <div className="row align-items-center text-md-left mb-5">
          <div className="col-md-6 order-1 order-md-0">
            <img
              className="img-fluid"
              src={QualityIcon}
              alt="high quality digital marketing icon"
              width="200"
            />
          </div>
          <div className="col-md-6 mb-4 mb-md-0">
            <span className="display-3 mb-2">02</span>
            <h3 className="mb-4">Quality Matters</h3>
            <p>
              The internet is full of garbage. Don't fall for quick fixes or temporary solutions. Instead, we help your team build for the long game.
              Standing out in the digital realm requires a high quality strategy and vision. We can help.
            </p>
          </div>
        </div>
        <div className="row align-items-center text-md-left mb-5">
          <div className="col-md-6 order-1 order-md-0">
            <img
              className="img-fluid"
              src={SustainableIcon}
              alt="sustainable digital marketing icon"
              width="200"
            />
          </div>
          <div className="col-md-6 mb-4 mb-md-0">
            <span className="display-3 mb-2">03</span>
            <h3 className="mb-4">Sustainability Matters</h3>
            <p>
              It doesn't matter how amazing your demand generation or inbound
              marketing program is if it is not sustainable. Short-term success
           anyone can achieve, but long-term success requires specific expertise. We
              pride ourselves in building programs, web experiences, and initiatives
              that your team can run with -- no six-figure maintenance fees required.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default PhilosophyPage
