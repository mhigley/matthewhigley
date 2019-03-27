import React, { Component } from "react"

class Hero extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <div>
            <h1>
              <span>{this.props.first}</span>
              <br />
              <span>{this.props.last}</span>
            </h1>
          </div>
        </div>
      </section>
    )
  }
}

export default Hero
