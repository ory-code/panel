import React from "react";
import SideBar from "../Components/SideBar";
import NavBar from "../Components/NavBar";
import "../Style/Pages/User.scss";
import Button from "@mui/material/Button";
import Chart from "../Components/Chart.jsx"
import Table from "../Components/Table.jsx"
const User = () => {
  return (
    <div className="user">
      <SideBar />
      <div className="user__container">
        <NavBar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <Button variant="text" className="btn__user__card">
              EDIT
            </Button>
            <div className="item">
              <img
                src="https://img-4.linternaute.com/kQeuZroIQBQ2pXumjFCRe5jHez8=/1500x/smart/9fa92e25e47448168f3ff3f5a0868c70/ccmcms-linternaute/11434049.jpg"
                alt=""
                className="item__img"
              />
              <div className="details">
                <h2 className="item__title">Steve Jobs</h2>
                <div className="detail__item">
                  <div className="item__key">EMAIL:</div>
                  <div className="item__value">SteveJobs@legend.com</div>
                </div>
                <div className="detail__item">
                  <div className="item__key">PHONE:</div>
                  <div className="item__value">00 11 22 33 45</div>
                </div>
                <div className="detail__item">
                  <div className="item__key">ADDRESS:</div>
                  <div className="item__value">
                    2066 Crist Dr Los Altos, Californie
                  </div>
                </div>
                <div className="detail__item">
                  <div className="item__key">COUNTRY:</div>
                  <div className="item__value">USA</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
          <Chart aspect={3/1} title="User spending last 6 Months"  />
          </div>
        </div>
        <div className="bottom">
        <h2 className="title__bottom">Lasts Orders</h2>

          <Table/>
        </div>
      </div>
    </div>
  );
};

export default User;
