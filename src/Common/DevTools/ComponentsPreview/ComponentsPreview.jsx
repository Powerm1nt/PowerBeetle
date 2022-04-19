import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchTextField from "../../Components/SearchComponents/SearchTextField";
import IconTextField from "../../Components/IconTextField/IconTextField";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import "./ComponentsPreview.scss";
import { Button } from "@mui/material";
import ItemCard from "../../Components/ItemCard/ItemCard";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "../../../Modules/GaleryLayout/GaleryLayout.scss";

export default class ComponentsPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      galeryView: "galery",
    };
  }

  galeryViewUpdate = (event, nextView) => {
    this.setState({ galeryView: nextView });
  };

  render() {
    return (
      <div className="cmpns cmpns-preview">
        <div className="prevcontent textfields-preview">
          <h3 className="desc-title-preview">Textfields</h3>
          <SearchTextField id="search-example" />
          <IconTextField
            icon={<DeveloperBoardIcon />}
            id="textfield-withicon-test"
          />
          <IconTextField
            id="textfield-withouticon-test"
            placeholder="noIconField"
          />
        </div>

        <div className="prevcontent buttons-preview">
          <h3 className="desc-title-preview">Buttons</h3>
          <Button className="cmpns-prevcmpns-custombtn-btn">
            Hellooooo World !
          </Button>
          <Button>Default</Button>
          <Button color="error">Error</Button>
          <Button color="success">Success</Button>
          <Button disabled>Disabled</Button>
        </div>

        <div className="prevcontent links-preview">
          <h3 className="desc-title-preview">Links</h3>
          <Link className="cmpns-link" to="/">
            [TEST] Go to the Homepage
          </Link>
        </div>

        <div className="prevcontent cards-preview">
          <h3 className="desc-title-preview">Cards</h3>

          <div className="cards">
            <ItemCard
              title="Welcome to reactjs ! Made by Facebook, it's a very powerful JavaScript Framework."
              desc="ReactJS presentation by this beautiful card developed by the author."
            >
              <div>
                <img alt="ReactJS Logo" src="/Users/NEPTUNE/Desktop/Trash/pt/public/logo512.png" width="400px" />
              </div>
            </ItemCard>

            <ItemCard
              title="A another card"
              desc="Another description about this card."
            >
              <span>Another content here</span>
            </ItemCard>
          </div>
        </div>

        <div className="prevcontent layouts-preview">
          <h3 className="desc-title-preview">Layouts</h3>

          <div className="layouts">
            <h4>GalleryLayout</h4>

            <div className="layout galerylayout-layout">
              <div className="galerylayout-overlay-btns">
                <ToggleButtonGroup
                  orientation="horizontal"
                  value={this.state.galeryView}
                  exclusive
                  onChange={this.galeryViewUpdate}
                >
                  <ToggleButton value="list">
                    <ViewListIcon />
                  </ToggleButton>
                  <ToggleButton value="galery">
                    <ViewModuleIcon />
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>

              <div
                className={`cards ${
                  this.state.galeryView === "galery"
                    ? "cards-galeryview"
                    : "cards-listview"
                }`}
              >
                <ItemCard mode={this.state.galeryView}>test</ItemCard>
                <ItemCard mode={this.state.galeryView}>test</ItemCard>
                <ItemCard mode={this.state.galeryView}>test</ItemCard>
                <ItemCard mode={this.state.galeryView}>test</ItemCard>
                <ItemCard mode={this.state.galeryView}>test</ItemCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
