import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const user = useSelector((store) => store.authReducer.user);
  console.log(user);
  const username = user.name;
  const token = user.token;

  useEffect(() => {   
    axios
      .get("/api/clients/current", {
        headers: { Authorization: `Bearer ${user.token}` },
      })
      .then((res) => {
        console.log(res.data);
        setCurrent(res.data);
      });
  }, []);


 

  return (
    <div className="flex h-screen dark">
      <div className="w-1/4 bg-black flex flex-col items-center">
        <nav className="flex flex-col items-center justify-center h-full">
          <Link className="text-yellow-400 py-4" to={"./pages/NewAccount.jsx"}>
            New Account
          </Link>
          <Link className="text-yellow-400 py-4" href="#">
            New Loan
          </Link>
          <Link className="text-yellow-400 py-4" href="#">
            New Transaction
          </Link>
        </nav>
      </div>
      <div className="item_on_center w-1/2 flex flex-col justify-center items-center px-12">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">
          Account Overview
        </h1>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="bg-black p-4 rounded-lg border border-yellow-400">
            <h2 className="text-xl font-semibold text-yellow-400 mb-4">
              Account 1
            </h2>
            <ul className="text-yellow-400">
              <li>Transaction 1</li>
              <li>Transaction 2</li>
              <li>Transaction 3</li>
            </ul>
          </div>
          <div className="bg-black p-4 rounded-lg border border-yellow-400">
            <h2 className="text-xl font-semibold text-yellow-400 mb-4">
              Account 2
            </h2>
            <ul className="text-yellow-400">
              <li>Transaction 1</li>
              <li>Transaction 2</li>
              <li>Transaction 3</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-1/4 flex flex-col justify-center items-center bg-black px-12">
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">
          Account Transactions
        </h1>
        <div className="grid grid-cols-1 gap-4 w-full">
          <div className="bg-black p-4 rounded-lg border border-yellow-400">
            <h2 className="text-xl font-semibold text-yellow-400 mb-4">
              Transaction 1
            </h2>
            <p className="text-yellow-400">Details about Transaction 1</p>
          </div>
          <div className="bg-black p-4 rounded-lg border border-yellow-400">
            <h2 className="text-xl font-semibold text-yellow-400 mb-4">
              Transaction 2
            </h2>
            <p className="text-yellow-400">Details about Transaction 2</p>
          </div>
          <div className="bg-black p-4 rounded-lg border border-yellow-400">
            <h2 className="text-xl font-semibold text-yellow-400 mb-4">
              Transaction 3
            </h2>
            <p className="text-yellow-400">Details about Transaction 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
