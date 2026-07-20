import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import LinkBox from "./../components/LinkBox";
import UserHeader from "@/components/UserHeader";
import axios from "axios";
import { toast } from "react-toastify";
import { data } from "autoprefixer";
import UserContext from "../context/UserContext";
function dashbord() {
  const router = useRouter();
  const [userData, setUserData] = useState({});
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_LINK_TREE_BACKEND_URL}/api/v1/data/dashboard`,
          {
            tokenMail: localStorage.getItem("LinkTreeToken"),
          },
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        const data = response?.data?.data;
        if (!data) {
          alert("data not found");
        } else {
          setUserData(data);
          setUser(data);
          localStorage.setItem("LinkTreeUser", data);
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    const linkTreeToken = localStorage.getItem("LinkTreeToken");
    if (!linkTreeToken) {
      router.push("/login");
    } else {
      fetchData();
    }
  }, []);

  return (
    <>
      <div className="min-h-screen dots-bg">
        <UserHeader />

        <main className="px-4 md:px-8 pb-10">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#1a1a2e] mt-4 mb-6">
            Your{" "}
            <span className="toon-highlight bg-[#FFD93D] border-2 border-[#1a1a2e]">
              Dashboard
            </span>{" "}
            📊
          </h1>
          <section className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 !pt-0">
            <LinkBox
              lbTitle="Links"
              lbNumber={userData.links}
              lbSvg={"link"}
              lbTheme={"red"}
            />{" "}
            <LinkBox
              lbTitle="Growth"
              lbNumber={"30%"}
              lbSvg={"growth"}
              lbTheme={"blue"}
            />
            <LinkBox
              lbTitle="Links"
              lbNumber={"12"}
              lbSvg={"email"}
              lbTheme={"red"}
            />{" "}
            <LinkBox
              lbTitle="Growth"
              lbNumber={"30%"}
              lbSvg={"lg"}
              lbTheme={"blue"}
            />
          </section>
          <section></section>
        </main>
      </div>
    </>
  );
}

export default dashbord;
