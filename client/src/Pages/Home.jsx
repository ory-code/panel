import React from 'react'
import NavBar from '../Components/NavBar'
import SideBar from '../Components/SideBar'
import "../Style/Pages/Home.scss"
const Home = () => {
  return (
    <div className="home" >
        <SideBar/>
        <div className="home__container">
          <NavBar/>
        </div>
    </div>
  )
}

export default Home