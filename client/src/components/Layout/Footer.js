import React from "react";
import { Link } from "react-router-dom";
import { } from '../../styles/FooterStyles.css'
const Footer = () => {
  return (
    <section id="footer">
      <div className="about">
        <h5>Get to know us</h5>
        <Link to="/about">About us</Link>|
        <Link to="/">Services</Link>|
        <Link to="/register">Register</Link>|
        <Link to="/login">Login</Link>
      </div>
      <div className="connect">
        <h5>Connect with us</h5>
        <Link to=""><i className="fa fa-facebook" area-hidden="true"></i></Link>
        <Link to=""><i className="fa fa-instagram" area-hidden="true"></i></Link>
        <Link to=""><i className="fa fa-linkedin" area-hidden="true"></i></Link>
        <Link to=""><i className="fa fa-twitter" area-hidden="true"></i></Link>
      </div>
      <div className="contact">
        <h5>Contact us</h5>
        <Link to=""><i className="fa fa-whatsapp" area-hidden="true"></i></Link>
        <Link to=""><i className="fa fa-phone" area-hidden="true"></i></Link>
        <Link to=""><i className="fa fa-envelope-o" area-hidden="true"></i></Link>
      </div>
    </section>
  );
};

export default Footer;
