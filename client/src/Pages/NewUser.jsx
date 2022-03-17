import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import NavBar from "../Components/NavBar";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";

import "../Style/Pages/NewUser.scss";
const NewUser = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const [file, setFile] = useState("");

  console.log(data);
  console.log(file);
  const Input = styled("input")({
    display: "none",
  });

  return (
    <div className="newUser">
      <SideBar />
      <div className="newUser__container">
        <NavBar />
        <div className="top">
          <h1>Add new user</h1>
        </div>
        <div className="bottom">
          <div className="left">
          <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
            <label htmlFor="icon-button-file">
              <Input
                accept="image/*"
                id="icon-button-file"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
          </div>
          <div className="right">
            <form
              onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
            >
              <div className="formInput">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="Sacha"
                  required={true}
                  {...register("firstName")}
                />
              </div>
              <div className="formInput">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Ory"
                  required={true}
                  {...register("name")}
                />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="sacha@code.com"
                  required={true}
                  {...register}
                />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input
                  type="password"
                  required={true}
                  {...register("password")}
                />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input
                  type="text"
                  required={true}
                  placeholder="street"
                  minLength={5}
                  message="error"
                  {...register("street")}
                />
                <input
                  type="number"
                  required={true}
                  placeholder="N°"
                  {...register("number")}
                />
                <input
                  type="text"
                  required={true}
                  placeholder="city"
                  {...register("city")}
                />
                <input
                  type="number"
                  required={true}
                  placeholder="5000"
                  {...register("postal_code")}
                />
                <input
                  type="text"
                  required={true}
                  placeholder="Belgium"
                  {...register("country")}
                />
              </div>
              <Button
                variant="contained"
                color="success"
                className="btn__form"
                type={"submit"}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUser;
