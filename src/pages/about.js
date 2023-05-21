import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Check from "../images/check.svg"
import Logo from "../images/doberman-digital-horizontal-full-logo.svg"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="container-fluid">
      <section className="py-5">
        <div className="text-center">
          <img
            className="img-fluid"
            src={Logo}
            width={600}
            alt="Doberman Digital logo"
          />
        </div>
        <h2 className="mb-4 text-center">About Doberman Digital</h2>
        <p className="mb-4 text-center">
        We are innovators, storytellers, believers and do-ers. There is no such thing as a small project when it's your brand on the line, which is why Cat Allen founded Doberman Digital in 2020 (formerly Allen Digital). From small tech to big tech, from cybersecurity to equestrian sports and non-profits, Cat has experience establishing, cultivating, and growing consistent brands through thoughtful, proven  content that produces tangible results. Conversion rate optimization throughout the customer acquisition journey is our speciality. Ask us how we can help your business thrive. 
        </p>
        <div className="py-4 text-center">
          <a className="btn btn-primary" href="philosophy">
            Our Philosophy
          </a>
        </div>
        <div className="flex-row">
          <div className="d-flex  align-items-start">
            <img className="mr-3" src={Check} alt="checkmark icon" />
            <div>
              <h4>Storytelling</h4>
              <p>
                People remember stories, not data points. Channels are merely highways to help you arrive at your audience, not the focus of the strategy. We help you craft stories that will stand the test of time to build a brand worth building.
              </p>
            </div>
          </div>
          <div className="d-flex  align-items-start">
            <img className="mr-3" src={Check} alt="checkmark icon" />
            <div>
              <h4>Authenticity</h4>
              <p>
                The best brands build authenticity through differentiation and innovation. We help our clients stand out in the crowded digital realm by bringing authenticity to the table. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default AboutPage
