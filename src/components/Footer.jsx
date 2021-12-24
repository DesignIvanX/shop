import React from "react";
import { Link } from "@reach/router";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaExpeditedssl,
} from "react-icons/fa";
import { SiNamecheap } from "react-icons/si";
import { BsFacebook, BsPinterest } from "react-icons/bs";
import "./style/Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__content">
        <div className="Footer__content__others">
          <div className="Footer__content__others__one">
            <h3>Contact</h3>
            <Link to="/">1 949 527 8625</Link>
            <Link to="/">support@theautomerch.com</Link>
            <Link to="/">Sunshine Ecommerce Technologies LLC</Link>
            <Link to="/">6 Jenner Suite 260 Irvine CA, 92618</Link>
          </div>
          <div className="Footer__content__others__two">
            <h3>Company info</h3>
            <Link to="/">About us</Link>
            <Link to="/">Privacy</Link>
            <Link to="/">Policy Terms and Conditions</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">COVID-19 UPDATE</Link>
          </div>
          <div className="Footer__content__others__three">
            <h3>Purchase info</h3>
            <Link to="/">Frequently Asked Questions</Link>
            <Link to="/">Payment methods</Link>
            <Link to="/">Shipping & Delivery</Link>
            <Link to="/">Returns Policy</Link>
            <Link to="/">Tracking</Link>
            <Link to="/"></Link>
          </div>
        </div>
        <div className="Footer__content__social">
          <a href="https://example.com/">
            <BsFacebook className="Footer__content__social--icon" />
          </a>
          <a href="https://example.com/">
            <BsPinterest className="Footer__content__social--icon" />
          </a>
        </div>
        <div className="Footer__content__payment">
          <div className="Footer__content__payment__one">
            <h3>Payment methods:</h3>
            <FaCcVisa className="Footer__content__payment__one--icon" />
            <FaCcMastercard className="Footer__content__payment__one--icon" />
            <FaCcPaypal className="Footer__content__payment__one--icon" />
          </div>
          <div className="Footer__content__payment__two">
            <h3>Buy with confidence:</h3>
            <SiNamecheap className="Footer__content__payment__two--icon" />
            <FaExpeditedssl className="Footer__content__payment__two--icon" />
          </div>
        </div>
      </div>
      <div className="Footer__foot">© Copyright 2021. All Rights Reserved</div>
    </div>
  );
};

export default Footer;
