import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"

class FluidImageFragment extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          fragment fluidImage on File {
            childImageSharp {
              fluid(maxWidth: 1400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        `}
      />
    )
  }
}

export default FluidImageFragment
