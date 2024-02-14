import React from "react";
import { useRouter } from "next/router";

function UserHeader({data}) {
  console.log(data)
  const {name , roll  , avatar , handle , Llnks} = data
    const router = useRouter()
  const handleLogOut = () => {
    localStorage.removeItem("LinkTreeToken");
    router.push("/login")
    
  };
  return (
    <>
      <header className=" flex flex-row justify-between items-center ">
        <div className=" flex flex-col md:flex-row p-4  ">
          <button className="inline-flex w-full md:w-auto   px-5 py-4 text-purple-500 font-bold  hover:text-purple-800 hover:bg-purple-100 rounded-md mb-3 border-2 border-purple-500">
            <img src="/svg/link.svg" alt="" className="w-6 mr-2" />
            Edit Link
          </button>
          <button className="inline-flex w-full md:w-auto px-5 py-4 text-red-500 font-bold hover:text-red-700 hover:bg-red-100 rounded-md mb-3 md:ml-3 border-2  border-red-500">
            <img src="/svg/user.svg" alt="" className="w-6 mr-2" />
            Edit Profile
          </button>
        </div>
        <div className=" flex flex-row  ">
          <div className="inline-flex mr-5 text-right items-center bg-slate-200 px-3 py-2 rounded-md">
            <div className="text-xs md:text-md flex flex-col flex-wrap">
              <span className="font-bold">{handle}</span>
              <span>{roll} Pack </span>
            </div>
            <div className="user-img">
              <img
                className="w-10 ml-5 cursor-pointer"
                src={avatar}
                alt=""
              />
            </div>
          </div>
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
