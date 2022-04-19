import React, { Component } from "react";
import ComponentsPreview from "../../Common/DevTools/ComponentsPreview/ComponentsPreview";
import "./Preview.scss";

export default class Preview extends Component {
  render() {
    return (
      <div className="activity preview-view">
        <header className="activity-header">
          <div className="activity-htitle">Devel Preview Stuff</div>
        </header>

        <div className="activity-content">
          <h2>Components</h2>
          <ComponentsPreview />
        </div>
      </div>
    );
  }
}
