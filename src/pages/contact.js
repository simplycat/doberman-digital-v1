import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="container-fluid">
      <section className="py-5">
        <div className="container-fluid">
        <h2 className="mb-5">Contact Doberman Digital</h2>
          <form 
          name="contact" 
          method="POST" 
          data-netlify="true"
          netlify-honeypot="bot-field"
          data-netlify-recaptcha="false"
          action="thankyou"
          >
          <div className="form-group col-7">
            <label for="first-name">
            First Name 
            </label>
            <input type="text" 
            className="form-control" 
            id="first-name" 
            placeholder="First Name" required>
            </input>
          </div>
          <div className="form-group col-7">
            <label for="last-name">
            Last Name 
            </label>
            <input type="text" 
            className="form-control" 
            id="last-name" 
            placeholder="Last Name" required>
            </input>
          </div>
          <div class="form-group col-7">
            <label for="service">Service of Interest</label>
              <select class="form-control" 
              id="service">
                <option>Digital strategy</option>
                <option>Content creation</option>
                <option>Web consulting</option>
                <option>Advertising opportunities</option>
                <option>Other</option>
              </select>
            </div>
          <div class="form-group col-7">
                <label for="email">Your Email</label>
                <input type="email" 
                class="form-control" 
                id="email" 
                placeholder="name@example.com" required>
                </input>
            </div>
            <div class="form-group col-7">
                <label for="Message">Message (optional)</label>
                <textarea class="form-control" 
                id="message" 
                rows="5">
                </textarea>
            </div>
            <div class="form-group col-7">
              <button type="submit" class="btn btn-primary align-center">Submit</button>
            </div>
        </form>
          <div className="col-12 mt-4">
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
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default ContactPage
