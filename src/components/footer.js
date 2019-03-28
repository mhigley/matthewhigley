// import { Link } from "gatsby"
import PropTypes from "prop-types";
import React from "react";

import "@fortawesome/fontawesome-pro/css/all.css";

const Footer = ({ siteUrl }) => (
  <footer>
    <div className="container">
      <div>
        © {new Date().getFullYear()} {siteUrl}. Built with{" "}
        <i className="fal fa-heart" /> and <i className="fal fa-coffee" />
        {` `}
        {/* <a href="https://www.gatsbyjs.org">Gatsby</a> */}
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  siteUrl: PropTypes.string
};

Footer.defaultProps = {
  siteUrl: ``
};

export default Footer;
