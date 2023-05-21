import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TwitterIcon from "../images/twitter.svg"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="container-fluid">
      <section className="py-5">
        <h2 className="mb-5 text-center">Contact Doberman Digital</h2>
        <div className="container-fluid">
          <div className="col-md-8 mx-auto">
            <form
              method="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
              data-netlify-recaptcha="false"
              name="contact"
              action="thankyou"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div className="d-flex flex-column flex-md-row">
                <div className="form-group form-row">
                  <p>
                    <label for="input1-contacts-05">
                      Your Name:
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control mb-3 mr-5"
                      />
                    </label>
                  </p>
                </div>
                <div className="form-group form-row">
                  <p>
                    <label className="mb-3 mr-5">
                      Your Email:
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control mb-3 mr-5"
                      />
                    </label>
                  </p>
                </div>
              </div>
              <div className="form-group">
                <p>
                  <label for="services">Service of Interest</label>
                  <select class="form-control" id="services">
                    <option value="digital strategy">Digital Strategy</option>
                    <option value="content creation">Content Creation</option>
                    <option value="web consulting">Web Consulting</option>
                    <option value="digital experiences">Digital Experiences</option>
                    <option value="other">Other</option>
                  </select>
                </p>
              </div>
              <div className="form-group form-row">
                <p>
                  <label>
                    Message
                    <textarea
                      name="message"
                      id="message"
                      rows="5"
                      className="form-control mb-3"
                    />
                  </label>
                </p>
              </div>
              <div data-netlify-recaptcha="true"></div>
              <button
                type="submit"
                className="btn btn-primary px-5 d-block mx-auto"
              >
                Submit
              </button>
            </form>
          </div>
          {/* <div className="col-12 mt-4">
            <p>
            Twitter: {" "}
              <a href="https://twitter.com/dobermndigital">
                @Dobermndigital
              </a>
            </p>
            <p>
            LinkedIn: {" "}
              <a href="https://www.linkedin.com/company/allendigital">
                Doberman Digital, Inc.
              </a>
            </p>
          </div> */}
        </div>
      </section>
    </div>
  </Layout>
)

export default ContactPage
