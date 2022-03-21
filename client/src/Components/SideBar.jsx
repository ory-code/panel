import React, { useContext } from "react";
import logo from "../assets/like.png";
import { Link } from "react-router-dom";
import "../Style/Components/SideBar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { DarkModeContext } from "../Context/DarkModeContext";

const SideBar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <Link to={"/"} className="link">
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">List</p>
          <Link to="/users/" className="link">
            <li>
              <PersonIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to={"/products"} className="link">
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <ShoppingBasketIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">Useful Information</p>
          <li>
            <NotificationsActiveIcon className="icon" />
            <span>Notifications</span>
          </li>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">My Profile</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="color__options"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="color__options"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default SideBar;
