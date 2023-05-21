import React from "react"

import FeaturedImage from "../images/featured-image-web-design-allen-digital.svg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PrivacyIcon from "../images/icon-privacy-first-marketing.svg"
import MobileIcon from "../images/icon-mobile-ready-web-design.svg"
import CustomIcon from "../images/icon-custom-web-solutions.svg"
import EasyIcon from "../images/icon-easy-to-manage-websites.svg"
import OptimizeIcon from "../images/icon-day-one-optimized-websites.svg"

const WebDesignPage = () => (
  <Layout>
    <SEO title="Web Design" />
    <section className="py-5">
      <div className="container text-center">
        <h1>Web Design</h1>
        <img
          className="img-fluid"
          src={FeaturedImage}
          width="500"
          alt="Spider Web Design is a lot like Web Design"
        />
        <p className="text-center mb-0 small text-muted">
          Effective websites capture audience attention.
        </p>
        <p className="text-left py-5">
          Unlike traditional agencies, we approach each new project from a fresh
          perspective. By leveraging exciting new technologies, like GatsbyJS, a
          React-based open-source framework, and combining it with powerful,
          innovative content management systems (CMS), we build websites to suit
          a variety of needs. From eCommerce to software-as-a-service (SaaS), we
          love applying our expertise in web design, search engine optimization
          and conversion rate optimization to deliver best-in-class digital
          experiences that your business can sustain for years to come.
        </p>
        <div className="text-center">
          <a
            className="btn btn-primary"
            href="#mailgo"
            data-address="allendigital"
            data-domain="pm.me"
          >
            Connect with Us
          </a>
        </div>
        <section className="text-left py-5">
          <h2 className="mb-4">The Allen Digital Difference</h2>
          <div className="row align-items-center text-md-left mb-5">
            <div className="col-md-6 order-1 order-md-0">
              <img
                className="img-fluid mx-auto py-2"
                src={PrivacyIcon}
                width="180"
                alt="Privacy-First Marketing Icon"
              />
            </div>
            <div className="col-md-6 mb-4 mb-md-0">
              <h3 className="mb-4">Privacy-First</h3>
              <p>
                Why use invasive marketing and website trackers that only gain
                minimal data while risking losing the trust of your prospective
                customers? We leverage privacy-first analytics and carefully
                curate our tools and processes to ensure that privacy is at the
                forefront of every web project we deliver.
              </p>
            </div>
          </div>
          <div className="row align-items-center text-md-right mb-5">
            <div className="col-md-6 mb-4 mb-md-0">
              <h3 className="mb-4">Built for Mobile</h3>
              <p>
                Nearly 80% of internet traffic comes from mobile devices and
                studies show that if your website takes more tha 3 seconds to
                load, you've lost more than 50% of your visitors. We prioritize
                mobile first because it is the key to unlocking the best user
                experience and ensuring you are not missing out on driving
                traffic to your website.
              </p>
            </div>
            <div className="col-md-6 order-1 order-md-0">
              <img
                className="img-fluid mx-auto py-2"
                src={MobileIcon}
                width="200"
                alt="Mobile Ready Web Design Icon"
              />
            </div>
          </div>
          <div className="row align-items-center text-md-left mb-5">
            <div className="col-md-6 order-1 order-md-0">
              <img
                className="img-fluid mx-auto py-2"
                src={CustomIcon}
                width="200"
                alt="Custom Web Solutions Icon"
              />
            </div>
            <div className="col-md-6 mb-4 mb-md-0">
              <h3 className="mb-4">Custom Solutions</h3>
              <p>
                We will never tell you that you have to change your messaging to
                fit our templates <i>because we don't use templates</i>.
                Everything we build is 100% tailor made and custom coded to your
                unique website needs. From concept through execution, we deliver
                websites foundationally sound websites that scale to fit your
                business needs.
              </p>
            </div>
          </div>
          <div className="row align-items-center text-md-right mb-5">
            <div className="col-md-6 mb-4 mb-md-0">
              <h3 className="mb-4">Easy to Manage</h3>
              <p>
                We help our clients select a CMS and hosting solutions that best
                fit their skillset and their budget. We also offer analytics,
                hosting and options for ongoing support throughout the entire
                lifecycle of your website. We believe in the mantra "no client
                left behind".
              </p>
            </div>
            <div className="col-md-6 order-1 order-md-0">
              <img
                className="img-fluid mx-auto py-2"
                src={EasyIcon}
                width="200"
                alt="Easy to Manage Websites Icon"
              />
            </div>
          </div>
          <div className="row align-items-center text-md-left mb-5">
            <div className="col-md-6 order-1 order-md-0">
              <img
                className="img-fluid mx-auto py-2"
                src={OptimizeIcon}
                width="200"
                alt="Day One Optimized Websites Icon"
              />
            </div>
            <div className="col-md-6 mb-4 mb-md-0">
              <h3 className="mb-4">Day One Optimization</h3>
              <p>
                Despite what you may have heard, search engine optimization
                (SEO) starts from day one. Website structure, technical backend
                features, keyword research and crawlability are all pieces to
                the SEO puzzle that cannot be thrown in after-the-fact. Every
                website we build is optimized from day one.
              </p>
            </div>
          </div>
        </section>
        <a href="/work">Go Back</a>
      </div>
    </section>
  </Layout>
)

export default WebDesignPage
