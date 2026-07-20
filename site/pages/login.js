import React, { useState } from "react";
import style from "../styles/apply.module.css";
import Footer from "@/components/Footer";
import { toast } from "react-toastify";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_LINK_TREE_BACKEND_URL}/api/v1/login`,
        {
          email: email.toLocaleLowerCase().trim(),
          password,
        }
      );
      if (response.status === 200 && response.data.success === true) {
        toast.success("You are login successfully");
        JSON.stringify(
          localStorage.setItem("LinkTreeToken", response.data.token)
        );
        setSubmitted(false);
        router.push("/dashbord");
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      toast.error(error.meassage || "An error occurred during login");
      setSubmitted(false);
    }

    setEmail("");
    setPassword("");
  };
  return (
    <>
      <section
        className={
          style.background +
          " min-h-screen flex flex-col justify-center items-center px-4 py-10"
        }
      >
        <div className="w-full max-w-md toon-pop">
          <div className="toon-sticker bg-white px-6 py-8 sm:px-8">
            <div className="text-center text-4xl mb-2">👋</div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-[#1a1a2e]">
              Welcome back, creator!
            </h1>
            <p className="text-center font-semibold text-[#3d3d5c] mt-2">
              Access your Dashboard
            </p>
            <p className="text-center py-2 font-bold text-[#7c3aed]">
              Keep building your hub ✨
            </p>
            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-4 text-lg mt-3"
            >
              <span className="toon-input flex flex-row items-center px-3 py-2.5">
                <img className="w-6 mr-2" src="/svg/email.svg" alt="" />
                <input
                  className="focus:outline-none w-full font-medium bg-transparent"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </span>

              <input
                className="toon-input px-3 py-2.5 font-medium"
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <input
                type="submit"
                value={submitted ? "Loading..." : "Login 🎉"}
                className="toon-btn bg-[#7c3aed] py-3 text-white text-lg mt-2"
              />
            </form>
          </div>
          <h4 className="text-center text-white font-bold mt-6 relative z-10">
            New here?{" "}
            <Link
              href="/apply"
              className="toon-highlight bg-[#FF8FAB] border-2 border-[#1a1a2e] text-[#1a1a2e] px-3 inline-block"
            >
              Apply
            </Link>
          </h4>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
