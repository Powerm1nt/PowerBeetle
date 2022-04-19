import React, { Component } from "react";
import "./MainFooter.scss";
import { Link } from "react-router-dom";
import ApplConfig from "../../Common/config.json";
export default class MainFooter extends Component {
  render() {
    return (
      <footer className="main-footer">
        <div className="mfooter-container">
          <div className="mfooter-row">
            <div className="mfrow-col">
              <span className="section-title">
                About {ApplConfig.commercial_name}
              </span>
              <ul>
                <li>
                  <Link to="/help/services">Our Services</Link>
                </li>
                <li>
                  <Link to="/help/contact-us">Contact-Us</Link>
                </li>
                <li>
                  <Link to="/help/about">{`About ${ApplConfig.commercial_name}`}</Link>
                </li>
              </ul>
            </div>

            <div className="mfrow-col">
              <span className="section-title">Get help.</span>
              <ul>
                <li>
                  <Link to="/help/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/help/shipping">Shipping & Refund</Link>
                </li>
                <li>
                  <Link to="/help/payments">Payments</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mfooter-crights">
            {`© ${new Date().getFullYear()} - `}
            <b className="w-evidence">{`${ApplConfig.commercial_name}`}</b> All
            rights reserved.
          </div>
        </div>
      </footer>
    );
  }
}
