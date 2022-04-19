import React, { Component } from "react";
import "./ItemCard.scss";

export default class ItemCard extends Component {
  render() {
    return (
      <div
        className={
          "cmpns cmpns-itemcard " +
          `cmpns-itemcard-${
            this.props.mode === "list" ? "listview" : "galeryview"
          }`
        }
      >
        <div className="content-itemcard">{this.props.children}</div>

        <footer className="footer-itemcard">
          <div className="f-content">
            <div className="fc-cardabout">
              <div className="fc-cardname">{this.props.title}</div>
              <div className="fc-carddesc">{this.props.desc}</div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
