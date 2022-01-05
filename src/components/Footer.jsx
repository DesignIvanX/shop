import React from "react";
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
            <a href="/">+595 992 233418</a>
            <a href="/">support@thedogmerch.com</a>
            <a href="/">Sunshine Ecommerce Technologies LLC</a>
            <a href="/">6 Jenner Suite 260 Irvine CA, 92618</a>
          </div>
          <div className="Footer__content__others__two">
            <h3>Company info</h3>
            <a href="/">About us</a>
            <a href="/">Privacy</a>
            <a href="/">Policy Terms and Conditions</a>
            <a href="/">Contact Us</a>
            <a href="/">COVID-19 UPDATE</a>
          </div>
          <div className="Footer__content__others__three">
            <h3>Purchase info</h3>
            <a href="/">Frequently Asked Questions</a>
            <a href="/">Payment methods</a>
            <a href="/">Shipping & Delivery</a>
            <a href="/">Returns Policy</a>
            <a href="/">Tracking</a>
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
      <div className="Footer__foot">©Copyright 2022. All Rights Reserved</div>
    </div>
  );
};

export default Footer;
