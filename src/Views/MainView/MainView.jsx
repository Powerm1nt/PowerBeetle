import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Preview from "../Preview/Preview";
import MainFooter from "../../Modules/Footer/MainFooter";
import MainHeader from "../../Modules/Header/MainHeader";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";
import AccountView from "../AccountView/AccountView";
import CartView from "../CartView/CartView";
import DashBoard from "../DashBoard/DashBoard";
import DiscoverView from "../DiscoverView/DiscoverView";
import NotificationsView from "../NotificationsView/NotificationsView";
import SearchView from "../SearchView/SearchView";
import "./MainView.scss";

export default class MainView extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="mview-view">
          <MainHeader />
          <div className="rmain-content-view">
            <Routes>
              <Route path="/" element={<DiscoverView />} />
              <Route path="/account" element={<AccountView />} />
              {/* <Route path="/notifications" element={<NotificationsView />} /> */}
              <Route path="/search" element={<SearchView />} />
              <Route path="/cart" element={<CartView />} />
              <Route path="/dashboard" element={<DashBoard />} />

              {/* Devel temporary stuff */}

              <Route path="/preview" element={<Preview />} />
            </Routes>
          </div>
          <MainFooter />
          <NavigationBar />
        </div>
      </BrowserRouter>
    );
  }
}
