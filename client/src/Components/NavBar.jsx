import React, { useContext } from "react";
import "../Style/Components/NavBar.scss";
import "../Style/Components/NavBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatIcon from "@mui/icons-material/Chat";
import ListIcon from "@mui/icons-material/List";
import Badge from "@mui/material/Badge";
import { DarkModeContext } from "../Context/DarkModeContext";

const NavBar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchIcon className="icn__search" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icn" />
          </div>
          <div className="item">
            <DarkModeIcon
              className="icn"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenIcon className="icn" />
          </div>
          <div className="item">
            <Badge badgeContent={102} color="primary" max={100}>
              <NotificationsIcon className="icn" color="action" />
            </Badge>
          </div>
          <div className="item">
            <Badge badgeContent={41} color="primary" max={100}>
              <ChatIcon className="icn" />
            </Badge>
          </div>
          <div className="item">
            <ListIcon className="icn" />
          </div>
          <div className="item">
            <img
              src="https://previews.123rf.com/images/jeksonjs/jeksonjs1801/jeksonjs180100001/92777776-plantilla-de-logotipo-de-cocodrilo-s%C3%ADmbolo-de-cocodrilo-cocodrilo-con-texto-.jpg"
              alt="profile img"
              className="avatar__img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
