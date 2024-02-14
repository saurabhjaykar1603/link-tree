import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LinkBox from "./../components/LinkBox";
import UserHeader from "@/components/UserHeader";
import axios from "axios";
import { toast } from "react-toastify";
import { data } from "autoprefixer";
function dashbord() {
  const router = useRouter();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/v1/data/dashboard",
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
        if(!data){
          alert("data not found")
        }
        else{

          setUserData(data);
          localStorage.setItem("LinkTreeUser" , data);
          toast.success(data.message)
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
      <div>
        <UserHeader  data={userData}/>
        
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
