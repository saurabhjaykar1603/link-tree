import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import UserContext from "@/context/UserContext";
import axios from "axios";

function UserHeader() {
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
    <header className="flex flex-col sm:flex-row justify-between items-center gap-4 px-4 md:px-8 py-5">
      <div className="flex flex-row gap-3">
        <Link href="/edit/link">
          <button className="toon-btn inline-flex items-center gap-2 bg-[#A5D8FF] text-[#1a1a2e] px-4 py-2.5 text-sm md:text-base">
            <img src="/svg/link.svg" alt="" className="w-4 md:w-5" />
            Edit Link
          </button>
        </Link>
        <Link href="/edit/profile">
          <button className="toon-btn inline-flex items-center gap-2 bg-[#FF8FAB] text-[#1a1a2e] px-4 py-2.5 text-sm md:text-base">
            <img src="/svg/user.svg" alt="" className="w-4 md:w-5" />
            Edit Profile
          </button>
        </Link>
      </div>
      <div className="flex flex-row items-center gap-3">
        <Link
          href={`${process.env.NEXT_PUBLIC_LINK_TREE_FRONTEND_URL}/${handle}`}
        >
          <div className="toon-card inline-flex items-center bg-white px-3 py-2 gap-3 !rounded-2xl">
            <div className="text-xs md:text-sm flex flex-col text-right">
              <span className="font-extrabold text-[#1a1a2e]">{handle}</span>
              <span className="font-semibold text-[#7c3aed]">{roll} Pack</span>
            </div>
            <img
              className="w-10 h-10 cursor-pointer rounded-full border-[3px] border-[#1a1a2e] object-cover bg-[#FFD93D]"
              src={avatar}
              alt=""
            />
          </div>
        </Link>
        <span className="toon-btn bg-white p-2.5">
          <img src="/svg/notify.svg" alt="Notifications" className="w-5" />
        </span>
        <span className="toon-btn bg-[#FFD93D] p-2.5" onClick={handleLogOut}>
          <img
            src="/svg/logout.svg"
            alt="Logout"
            className="w-5 cursor-pointer"
          />
        </span>
      </div>
    </header>
  );
}

export default UserHeader;
