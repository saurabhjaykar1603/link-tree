import React, { useState } from "react";
import style from "../styles/apply.module.css";
import Footer from "@/components/Footer";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
function Apply() {
  const router = useRouter();
  const [handle, setHandle] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      if (!category) {
        throw new Error("Add a category");
      }

      const response = await axios.post(
        "http://localhost:8000/api/v1/register",
        {
          handle,
          email,
          password,
          category,
        }
      );

      if (response.status === 200 && response.data.success === true) {
        toast.success("You are registered successfully");
        JSON.stringify(
          localStorage.setItem("LinkTreeToken", response.data.token)
        );
        setSubmitted(true);
        router.push("/login");
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error(
          "Email or handle already in use. Please try a different one."
        );
      } else {
        toast.error(error.message || "An error occurred during registration");
      }
    }
  };

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
            <form
              onSubmit={handleRegister}
              className="flex flex-col gap-3 text-lg mt-1"
            >
              <span className="flex flex-row shadow-md border-2 px-3 py-2 rounded-md focus:outline-none">
                <img className="w-6 mr-2" src="/svg/ig.svg" alt="" />
                <input
                  className=" focus:outline-none"
                  type="text"
                  placeholder="Social Handle"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                />
              </span>
              <input
                className="shadow-md border-2 px-3 py-2 rounded-md focus:outline-none"
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="shadow-md border-2 px-3 py-2 rounded-md focus:outline-none"
                type="password"
                placeholder="Set a password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              <input
                type="submit"
                value={"apply"}
                className="bg-indigo-600 py-2 text-white font-semibold rounded-lg"
              />
            </form>
          </div>
          <h4 className="text-center text-white font-bold mt-4">
            Already have an account ?{" "}
            <Link href="/login" className="text-red-400">
              Login
            </Link>
          </h4>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Apply;
