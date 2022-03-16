import React from "react";
import SideBar from "../Components/SideBar";
import NavBar from "../Components/NavBar";
import "../Style/Pages/Users.scss";
import DataTable from "../Components/DataTable";

const Users = () => {
  return (
    <div className="users">
      <SideBar />
      <div className="users__container">
        <NavBar />
        <DataTable />
        <div className="users__Table">
          
        </div>
      </div>
    </div>
  );
};

export default Users;
