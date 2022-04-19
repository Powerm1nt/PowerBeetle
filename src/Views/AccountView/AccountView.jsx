import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Tooltip, Button } from "@mui/material";
import IconTextField from "../../Common/Components/IconTextField/IconTextField";
import "./AccountView.scss";

export default class AccountView extends Component {
  render() {
    return (
      <div className="activity discover-view">
        <header className="activity-header">
          <div className="activity-htitle">Your Account.</div>
        </header>

        <div className="activity-content">
          <div className="account-section">
            <div className="s-profile">
              <div className="widget w-avatar">
                <Tooltip title="Click to change picture">
                  <div className="m-avatar">Profile picture here.</div>
                </Tooltip>
              </div>

              <div className="widget w-profile-setup">
                <div className="profile-flds">
                  <div className="flds f-name">
                    <span>Username</span>
                    <IconTextField
                      className="profile-flds"
                      id="m-profile-name-fld"
                      placeholder="Your Username"
                    />
                  </div>

                  <div className="flds passwd">
                    <span>Password</span>

                    <Button className="btn-chpasswd" color="error">
                      Change password
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <NavLink to="/dashboard" className="btn-link">
              <Button>Go to the admin dashboard</Button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
