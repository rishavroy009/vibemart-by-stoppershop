import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h5 className="text-center">All Right Reserved &copy; Vibemart</h5>
      <p className="text-center mt-3">
        <Link to="/">About</Link>|<Link to="/">Contact</Link>|
        <Link to="/">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
