import React from "react"

import FeaturedImage from "../images/featured-image-content-allen-digital.svg"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContentPage = () => (
  <Layout>
    <SEO title="Content" />
    <section className="py-5">
      <div className="container text-center">
        <h1>Content</h1>
        <img
          className="img-fluid"
          src={FeaturedImage}
          width="500"
          alt="Content doesn't have to be boring or temporary - our content is good enough to go on the official record"
        />
        <p className="mb-0 small text-muted">
          Your content should reflect thought leadership, expertise and
          trustworthiness.
        </p>
        <div className="py-5">
          <p className="text-left">
            Our team has experience crafting content for each stage of the
            customer journey, marketing funnel, and HubSpot flywheel. We pride
            ourselves on uniqueness, freshness and attention to detail. Tired of
            tone-deaf copy that ignores current affairs? Are you innundated with
            leads or prospects that are a poor fit for your business? Let us
            help you craft meaningful content that attracts, converts and
            captivates your audience and your current customers. Specializing in
            blogging, podcasting, website copy, advertising copy and long form
            content.
          </p>
          <h3 className="mb-4">Content We Create</h3>
          <h5>Blogs</h5>
          <h5>Podcasts</h5>
          <h5>Website Copy</h5>
          <h5>Advertising Copy</h5>
          <h5>Long Form Content</h5>
          <div className="py-5">
            <a
              className="btn btn-primary"
              href="#mailgo"
              data-address="allendigital"
              data-domain="pm.me"
            >
              Connect with Us
            </a>
          </div>
          <a href="/work">Go Back</a>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContentPage
