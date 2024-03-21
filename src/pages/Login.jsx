import React from "react";
import axios from "axios";
import authActions from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const { login, current } = authActions;
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    
    axios
      .post("/api/auth/login", userData)
      .then((res) => {
        dispatch(login(res.data));
        if (res.data) {
          axios
            .get("/api/clients/current", {
              headers: { Authorization: `Bearer ${res.data}` },
            })
            .then((res) => {
              console.log("console.log del login");
              console.log(res.data);
              dispatch(current(res.data));
              navigate("/home");
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex h-screen dark">
      <div className="w-1/2 bg-black flex justify-center items-center">
        <img
          alt="Bank image"
          className="h-[500px] w-[500px] bg-[#FFD700]"
          height="300"
          src="/koi_image.jpg"
          style={{
            aspectRatio: "300/300",
            objectFit: "cover",
          }}
          width="300"
        />
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center bg-black px-12">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">Login</h1>

        <form className="w-full max-w-sm space-y-6" onSubmit={handleSignIn}>
          <div className="flex flex-col space-y-2">
            <label
              className="text-sm font-medium text-yellow-400"
              htmlFor="email"
            >
              Email
            </label>
            <input
              placeholder="Enter your email"
              type="email"
              onChange={handleInput}
              name="email"
              id="email"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label
              className="text-sm font-medium text-yellow-400"
              htmlFor="password"
            >
              Password
            </label>
            <input
              placeholder="Enter your password"
              type="password"
              onChange={handleInput}
              name="password"
              id="password"
              required
            />
          </div>

          <button className="w-full bg-yellow-400 text-black hover:bg-yellow-500">
            Sign In
          </button>

          <div className="text-center">
            <button
              className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              variant="outline"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
