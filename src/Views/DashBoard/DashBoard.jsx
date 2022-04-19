import React, { Component } from "react";
import ApplConfig from "../../Common/config.json";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabPanel from "../../Common/Components/TabPanel/TabPanel";
import General from "../../Modules/Dashboard/General/General";
import Users from "../../Modules/Dashboard/Users/Users";
import Shop from "../../Modules/Dashboard/Shop/Shop";
import CustomPages from "../../Modules/Dashboard/CustomPages/CustomPages";
import About from "../../Modules/Dashboard/About/About";
import switchIndex from "../../Common/Components/TabPanel/TabPanel";
import "./DashBoard.scss";

export default class DashBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, newValue) {
    this.setState({ index: newValue });
  }

  componentDidMount() {
    document.querySelector(".mhead-mainlogo").innerHTML = "Dashboard.";
  }

  componentWillUnmount() {
    document.querySelector(".mhead-mainlogo").innerHTML =
      ApplConfig.commercial_name;
  }

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-content">
          <div className="d-tabbar">
            <Tabs
              className="tabs"
              onChange={this.handleChange}
              value={this.state.index}
              scrollButtons="auto"
              variant="scrollable"
            >
              <Tab className="tab" label="General" {...switchIndex(0)} />
              <Tab className="tab" label="Users" {...switchIndex(1)} />
              <Tab className="tab" label="Shop" {...switchIndex(2)} />
              <Tab className="tab" label="Custom Pages" {...switchIndex(3)} />
              <Tab className="tab" label="About" {...switchIndex(4)} />
            </Tabs>
          </div>

          <div className="dash-content">
            <TabPanel value={this.state.index} index={0}>
              <General />
            </TabPanel>

            <TabPanel value={this.state.index} index={1}>
              <Users />
            </TabPanel>

            <TabPanel value={this.state.index} index={2}>
              <Shop />
            </TabPanel>

            <TabPanel value={this.state.index} index={3}>
              <CustomPages />
            </TabPanel>

            <TabPanel value={this.state.index} index={4}>
              <About />
            </TabPanel>
          </div>
        </div>
      </div>
    );
  }
}
