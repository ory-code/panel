import React from "react";
import Chart from "../Components/Chart";
import Featured from "../Components/Featured";
import NavBar from "../Components/NavBar";
import SideBar from "../Components/SideBar";
import Table from "../Components/Table";
import Widget from "../Components/Widget";
import "../Style/Pages/Home.scss";
const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="home__container">
        <NavBar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title={"last 6 months revenue"} aspect={2 / 1} />
        </div>
        <div className="list__container">
          <div className="list__title">LATEST TRANSACTION</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
