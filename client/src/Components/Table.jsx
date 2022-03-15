import React from 'react'
import "../Style/Components/Table.scss"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const TableList = () => {
    const rows = [
        {
          id: 1143155,
          product: "Maté bio",
          img: "https://m.media-amazon.com/images/I/813RL2s3QyS._AC_SL1500_.jpg",
          customer: "John Smith",
          date: "1 March",
          amount: 8.5,
          method: "Cash on Delivery",
          status: "Approved",
        },
        {
          id: 2235235,
          product: "Playstation 5",
          img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
          customer: "Michael Doe",
          date: "1 March",
          amount: 900,
          method: "Online Payment",
          status: "Pending",
        },
        {
          id: 2342353,
          product: "calebasse",
          img: "https://m.media-amazon.com/images/I/71gW8U3TZ9L._AC_SL1390_.jpg",
          customer: "John Smith",
          date: "1 March",
          amount: 55,
          method: "Cash on Delivery",
          status: "Pending",
        },
        {
          id: 2357741,
          product: "Fifa 22 ps4",
          img: "https://m.media-amazon.com/images/I/810RQy7+VKL._AC_SL1500_.jpg",
          customer: "Jane Smith",
          date: "1 March",
          amount: 49,
          method: "Online",
          status: "Approved",
        },
        {
          id: 2342355,
          product: "Fraté Maté Original Yerba Mate Bio",
          img: "https://m.media-amazon.com/images/I/61Doinfsq8L._AC_SL1500_.jpg",
          customer: "Harold Carol",
          date: "1 March",
          amount: 20,
          method: "Online",
          status: "Pending",
        },
      ];
  return (
    <div className="table" >
        <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount €</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default TableList