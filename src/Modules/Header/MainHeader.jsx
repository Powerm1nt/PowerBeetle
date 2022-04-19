import React, { Component } from "react";
import "./MainHeader.scss";
import { IconButton, Tooltip } from "@mui/material";
import SearchTextField from "../../Common/Components/SearchComponents/SearchTextField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import ApplConfig from "../../Common/config.json";
import { NavLink } from "react-router-dom";

export default class MainHeader extends Component {
  render() {
    return (
      <header className="main-header">
        <div className="mhead-mainlogo">{ApplConfig.commercial_name}</div>
        <SearchTextField
          id="mheader-searchbar-fld"
          className="mhead-search-fld"
          placeholder={`Search on ${ApplConfig.commercial_name}...`}
        />

        <div className="mh-btns-group-right">
          <Tooltip title="Home">
            <NavLink to="/">
              <IconButton color="primary" component="span">
                <HomeRoundedIcon />
              </IconButton>
            </NavLink>
          </Tooltip>

          {/* Temporary Devel Stuff */}

          <Tooltip title="Developer Stuff">
            <NavLink to="/preview">
              <IconButton color="primary" component="span">
                <DeveloperBoardIcon />
              </IconButton>
            </NavLink>
          </Tooltip>

          <Tooltip title="Shoping Cart">
            <NavLink to="/cart">
              <IconButton color="primary" component="span">
                <ShoppingCartIcon />
              </IconButton>
            </NavLink>
          </Tooltip>

          {/* <Tooltip title="Notifications">
            <Link to="/notifications">
              <IconButton color="primary" component="span">
                <CircleNotificationsIcon />
              </IconButton>
            </Link>
          </Tooltip> */}

          <Tooltip title="Account">
            <NavLink to="/account">
              <IconButton color="primary" component="span">
                <AccountCircleIcon />
              </IconButton>
            </NavLink>
          </Tooltip>
        </div>
      </header>
    );
  }
}
