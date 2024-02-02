import React, { useState } from "react";
import style from "../styles/apply.module.css";
import Footer from "@/components/Footer";
import { toast } from "react-toastify";
import Link from "next/link";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();

    toast("Your are Logged in");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <section
        className={
          style.background + " min-h-screen flex justify-center items-center"
        }
      >
        <div className="main">
          <div className="content bg-white border-2 px-4 py-8 rounded-2xl shadow-lg w-96">
            <h1 className="text-2xl font-bold text-center">
              You are now among Top creators
            </h1>
            <p className="text-center mt-2">Access your Dashboard</p>
            <p className="text-center py-2 font-bold text-gray-500">
              Start building your hub
            </p>
            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-4 text-lg mt-5"
            >
              <span className="flex flex-row shadow-md border-2 px-3 py-2 rounded-md focus:outline-none">
                <img className="w-6 mr-2" src="/svg/email.svg" alt="" />
                <input
                  className="focus:outline-none"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </span>

              <input
                className="shadow-md border-2 px-3 py-2 rounded-md focus:outline-none"
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <input
                type="submit"
                value={"login"}
                className="bg-indigo-600 py-2 text-white font-semibold rounded-lg"
              />
            </form>
          </div>
          <h4 className="text-center text-white font-bold mt-4">
            New Here ?{" "}
            <Link href="/apply" className="text-red-400">
              Apply
            </Link>
          </h4>
        </div>
      </section>
      <Footer className="mt-9" />
    </>
  );
}

export default Login;
