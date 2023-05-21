import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturedImage from "../images/icon-equestrian-sports-marketing.svg"
import BannerAd from "../images/sporthorse-revival-banner-ad-2.jpeg"

function EquestrianSportsPage() {
  return (
    <Layout>
      <SEO title="Equestrian Sports Marketing and Advertising" />

      <div className="py-5 container text-center">
        <h1 className="text-center">Equestrian Sports</h1>
        <img
          className="img-fluid py-5"
          src={FeaturedImage}
          width="200"
          alt="Equestrian sports icon" />
        <h3 className="text-center py-5">For equestrians, by equestrians</h3>
        <p className="text-left mx-auto">
          Cat Allen has interviewed and written about some of the top equestrian
          athletes in the world, including: Kent Farrington, Reed Kessler, Katie
          Monahan Prudent, Lizzie Gingras, Hunter Holloway and the Philippaerts
          Twins. She has written in-depth editorial pieces featuring brands such
          as Tucci, Animo USA and H&M.
        </p>
        <h3 className="text-center py-5">In-depth Industry Knowledge</h3>
        <p className="text-left mx-auto">An avid equestrian with over 24 years
          in the saddle, Cat has also taught lessons, trained young horses and
          managed multi-million dollar equestrian operations in both the Midwest
          and East Coast Hunter/Jumper Circuits. Cat has traveled to horse shows
          throughout the continential United States to assist in on-site public
          relations and media coverage. Currently accepting a limited number of
          new clients.
        </p>
        <div className="text-center py-2">
          <a className="btn btn-primary" href="/contact">
            Get in Touch
          </a>
        </div>
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
    </Layout>
  )
}

export default EquestrianSportsPage
