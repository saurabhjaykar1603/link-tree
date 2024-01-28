import React, { useState } from "react";
import style from "../styles/apply.module.css";

function Apply() {
  const [category, setCategory] = useState("");
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleRegister =()=>{
    e.preventDefault()
  }
  return (
    <>
      <section
        className={
          style.background + " min-h-screen flex justify-center items-center"
        }
      >
        <div className="main">
          <div className="content bg-white border-2 px-4 py-8 rounded-2xl shadow-lg">
            <h1 className="text-2xl font-bold text-center">
              Join the Top 1% creators
            </h1>
            <p className="text-center">Create Linktree for your brand</p>
            <p className="text-center py-5 font-bold text-gray-500">
              Start building your hub
            </p>
            <form onSubmit={handleRegister} className="flex flex-col gap-4 text-lg mt-5">
              <span className="flex flex-row shadow-md border-2 px-3 py-2 rounded-md focus:outline-none">
                <img className="w-6 mr-2" src="/svg/ig.svg" alt="" />
                <input
                  className=" focus:outline-none"
                  type="text"
                  placeholder="Social Handle"
                />
              </span>
              <input
                className="shadow-md border-2 px-3 py-2 rounded-md focus:outline-none"
                type="email"
                placeholder="Enter your email"
              />
              <input
                className="shadow-md border-2 px-3 py-2 rounded-md focus:outline-none"
                type="password"
                placeholder="Set a password"
              />
              <h5 className="text-sm text-center">Account Type</h5>
              <span className="flex justify-center">
                <label className="flex flex-row mr-3 ">
                  <input
                    type="checkbox"
                    value={"Creator"}
                    checked={category === "Creator"}
                    onChange={handleCategoryChange}
                  />
                  <p className="pl-2">Creator</p>
                </label>

                <label className="flex flex-row mr-3 ">
                  <input
                    type="checkbox"
                    value={"Agency"}
                    checked={category === "Agency"}
                    onChange={handleCategoryChange}
                  />
                  <p className="pl-2">Agency</p>
                </label>

                <label className="flex flex-row mr-3 ">
                  <input
                    type="checkbox"
                    value={"Brand"}
                    checked={category === "Brand"}
                    onChange={handleCategoryChange}
                  />
                  <p className="pl-2">Creator</p>
                </label>
              </span>
              <button className=""></button>
              <input type="submit" value={"apply"} className="bg-indigo-600 py-2 text-white font-semibold rounded-lg"/>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Apply;
