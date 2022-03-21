import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import NewProduct from "./Pages/NewProduct";
import NewUser from "./Pages/NewUser";
import Product from "./Pages/Product";
import Products from "./Pages/Products";
import User from "./Pages/User";
import Users from "./Pages/Users";
import "../src/Style/Layout/Dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./Context/DarkModeContext";
function App() {

  const {darkMode} = useContext(DarkModeContext)
  
  return (
    <div className={darkMode ? "App dark" : "App"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="products">
              <Route index element={<Products />} />
              <Route path=":productId" element={<Product />} />
              <Route path="new" element={<NewProduct />} />
            </Route>
            <Route path="users">
              <Route index element={<Users />} />
              <Route path=":userId" element={<User />} />
              <Route path="new" element={<NewUser />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
