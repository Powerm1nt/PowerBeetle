import React, { Component } from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./GaleryLayout.scss";

export default class GaleryLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: "galery",
    };
  }

  handleChange = (event, nextView) => {
    this.setState({ view: nextView });
  };

  render() {
    return (
      <div className="layout galerylayout-layout">
        <div className="galerylayout-overlay-btns">
          <ToggleButtonGroup
            orientation="horizontal"
            value={this.state.view}
            exclusive
            onChange={this.handleChange}
          >
            <ToggleButton value="list">
              <ViewListIcon />
            </ToggleButton>
            <ToggleButton value="galery">
              <ViewModuleIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

        <div className="cards">{this.props.children}</div>
      </div>
    );
  }
}
