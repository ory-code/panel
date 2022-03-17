import React, { useState } from "react";
import "../Style/Components/DataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../Data/DataUsers";
import { Link } from "react-router-dom";

const DataTable = () => {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        console.log(params);
        return (
          <div className="cellAction">
            <Link to={`/users/${params.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.id)}
            >
              Delete
            </div>
          </div>
        );
        
      },
    },
  ];

  return (
    <div className="dataTable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
