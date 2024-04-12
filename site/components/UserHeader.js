import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import UserContext from "@/context/UserContext";
import axios from "axios";

function UserHeader() {
  // const { name, roll, avatar, handle, Links } = data;
  const router = useRouter();
  const handleLogOut = () => {
    localStorage.removeItem("LinkTreeToken");
    router.push("/login");
  };

  const { user, setUser } = useContext(UserContext);
  const { roll, avatar, handle } = user;

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
          // setUserData(data);
          setUser(data);
          localStorage.setItem("LinkTreeUser", data);
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    const linkTreeToken = localStorage.getItem("LinkTreeToken");
    if (!linkTreeToken) {
      alert("Please log in first.");
      router.push("/login");
    } else {
      fetchData();
    }
  }, []);

  return (
    <>
      <header className=" flex flex-row justify-between items-center ">
        <div className=" flex flex-col md:flex-row p-4  ">
          <Link href="/edit/link">
            <button className="inline-flex justify-center items-center w-[100px] md:w-auto md:text-[16px] text-[12px] px-5 py-4 text-purple-500 font-bold  hover:text-purple-800 hover:bg-purple-100 rounded-md mb-3 border-2 border-purple-500 ">
              <img src="/svg/link.svg" alt="" className="w-4 md:w-6 mr-2 text-sky-100" />
              Edit Link
            </button>
          </Link>
          <Link href="/edit/profile">
            <button className="inline-flex justify-center items-center w-[100px] md:w-auto md:text-[16px] text-[12px]  px-5 py-4 text-red-500 font-bold hover:text-red-700 hover:bg-red-100 rounded-md mb-3 md:ml-3 border-2  border-red-500">
              <img src="/svg/user.svg" alt="" className="w-4 md:w-6 mr-2 text-sky-100" />
              Edit Profile
            </button>
          </Link>
        </div>
        <div className=" flex flex-row  ">
          <Link
            href={`${process.env.NEXT_PUBLIC_LINK_TREE_FRONTEND_URL}/${handle}`}
          >
            <div className="inline-flex mr-5 text-right items-center bg-slate-200 px-3 py-2 rounded-md">
              <div className="text-xs md:text-md flex flex-col flex-wrap">
                <span className="font-bold">{handle}</span>
                <span>{roll} Pack </span>
              </div>
              <div className="user-img">
                <img
                  className="w-10 ml-5 cursor-pointer rounded-full"
                  src={avatar}
                  alt=""
                />
              </div>
            </div>
          </Link>
          <img src="/svg/notify.svg" alt="" className="w-6 mr-4" />
          <img
            src="/svg/logout.svg"
            alt=""
            className="w-6 mr-4 cursor-pointer"
            onClick={handleLogOut}
          />
        </div>
      </header>
    </>
  );
}

export default UserHeader;
