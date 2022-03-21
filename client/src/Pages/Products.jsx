import React, { useEffect, useState } from 'react'
import SideBar from "../Components/SideBar"
import NavBar from "../Components/NavBar"
import "../Style/Pages/Products.scss"
const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://fakestoreapi.com/products',
      );
      const json = await res.json();
      setData(json);
      console.log("data", json);
    };
    fetchData();
  }, [setData]);

  return (
    <div className="products" >
      <SideBar/>
      <div className="products__container">
        <NavBar />
        <div className="top">
        <h1>The Store </h1>
        </div>
        <div className="middle">
         <datalist/>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  )
}

export default Products