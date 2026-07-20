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
    setSubmitted(true);

    try {
      if (!category) {
        throw new Error("Add a category");
      }
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_LINK_TREE_BACKEND_URL}/api/v1/register`,
        {
          handle: handle.toLocaleLowerCase().trim(),
          email: email.toLocaleLowerCase().trim(),
          password,
          category,
        }
      );

      if (response.status === 200 && response.data.success === true) {
        toast.success("You are registered successfully");
        JSON.stringify(
          localStorage.setItem("LinkTreeToken", response.data.token)
        );
        setSubmitted(false);
        router.push("/login");
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      setSubmitted(false);
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
          style.background +
          " min-h-screen flex flex-col justify-center items-center px-4 py-10"
        }
      >
        <div className="w-full max-w-md toon-pop">
          <div className="toon-sticker bg-white px-6 py-8 sm:px-8">
            <div className="text-center text-4xl mb-2">🌟</div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-center text-[#1a1a2e]">
              Join the Top 1% creators
            </h1>
            <p className="text-center font-semibold text-[#3d3d5c] mt-1">
              Create a LinkTree for your brand
            </p>
            <p className="text-center pt-1 pb-5 font-bold text-[#7c3aed]">
              Start building your hub ✨
            </p>
            <form
              onSubmit={handleRegister}
              className="flex flex-col gap-4 text-lg"
            >
              <span className="toon-input flex flex-row items-center px-3 py-2.5">
                <img className="w-6 mr-2" src="/svg/ig.svg" alt="" />
                <input
                  className="focus:outline-none w-full font-medium bg-transparent"
                  type="text"
                  placeholder="Social Handle"
                  value={handle}
                  onChange={(e) => setHandle(e.target.value)}
                />
              </span>
              <input
                className="toon-input px-3 py-2.5 font-medium"
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="toon-input px-3 py-2.5 font-medium"
                type="password"
                placeholder="Set a password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <h5 className="text-sm font-bold text-center text-[#1a1a2e] mt-1">
                Account Type
              </h5>
              <div className="flex flex-wrap justify-center gap-2">
                {["Creator", "Agency", "Brand"].map((type) => (
                  <label
                    key={type}
                    className={`toon-btn px-4 py-1.5 text-sm select-none ${
                      category === type
                        ? "bg-[#FFD93D] text-[#1a1a2e]"
                        : "bg-white text-[#3d3d5c]"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="hidden"
                      value={type}
                      checked={category === type}
                      onChange={handleCategoryChange}
                    />
                    {type}
                  </label>
                ))}
              </div>
              <input
                type="submit"
                value={submitted ? "Loading..." : "Apply 🚀"}
                className="toon-btn bg-[#7c3aed] py-3 text-white text-lg mt-2"
              />
            </form>
          </div>
          <h4 className="text-center text-white font-bold mt-6 relative z-10">
            Already have an account?{" "}
            <Link
              href="/login"
              className="toon-highlight bg-[#FFD93D] border-2 border-[#1a1a2e] text-[#1a1a2e] px-3 inline-block"
            >
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
