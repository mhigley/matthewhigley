// import { Link } from "gatsby"
import PropTypes from "prop-types";
import React from "react";

import "@fortawesome/fontawesome-pro/css/all.css";

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="container">
      <div>
        © {new Date().getFullYear()} {siteTitle}, Built with{" "}
        <i className="fal fa-heart" /> and <i className="fal fa-coffee" />
        {` `}
        {/* <a href="https://www.gatsbyjs.org">Gatsby</a> */}
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string
};

Footer.defaultProps = {
  siteTitle: ``
};

export default Footer;
