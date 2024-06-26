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
          toast.success(data.message);
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
      <div style={{background: 'linear-gradient(to bottom, #4b0082, #000000)'}} className="h-screen">
        <UserHeader />

        <span></span>
        <main>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
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
