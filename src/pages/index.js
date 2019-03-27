import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import SEO from "../components/seo"

import Hero from "../sections/hero"
import Biography from "../sections/biography"
import Portfolio from "../sections/portfolio"
import Contact from "../sections/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero first="Matthew" last="Higley" />
    <Biography />
    <Portfolio />
    <Contact />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      
    </div> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
