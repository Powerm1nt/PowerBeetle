import React, { Component } from "react";
import "./NavigationBar.scss";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { Button } from "@mui/material";

export default class NavigationBar extends Component {
  iconSize = { fontSize: 30 };

  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: false,
    };
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos < currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.innerWidth <= "800") this.handleScroll();
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div
        className={`${
          this.props.className ? this.props.className : "navigationbar-compns"
        } ${!this.state.visible ? "hide-navbar" : ""}`}
      >
        <div className="navigbar-content">
          <NavLink to="/">
            <Button className="navigbar-button">
              <HomeRoundedIcon sx={this.iconSize} />
              Home
            </Button>
          </NavLink>

          <NavLink to="/cart">
            <Button className="navigbar-button">
              <ShoppingCartIcon sx={this.iconSize} />
              Cart
            </Button>
          </NavLink>

          {/* <NavLink to="/notifications">
            <Button className="navigbar-button">
              <CircleNotificationsIcon sx={this.iconSize} />
              Notifications
            </Button>
          </NavLink> */}

          <NavLink to="/account">
            <Button className="navigbar-button">
              <AccountCircleIcon sx={this.iconSize} />
              Account
            </Button>
          </NavLink>
        </div>
      </div>
    );
  }
}
