import React, { useEffect } from "react";
import { useRouter } from "next/router";
import LinkBox from "./../components/LinkBox";
import UserHeader from "@/components/UserHeader";
function dashbord() {
  const router = useRouter();
  useEffect(() => {
    const linkTreeToken = localStorage.getItem("LinkTreeToken");
    if (!linkTreeToken) {
      alert("Are bhai pahale login kr na tu");
      router.push("/login");
    }
  }, [router]);

  return (
    <>
      <div>
        <UserHeader/>
        <span></span>
        <main>
          <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            <LinkBox
              lbTitle="Links"
              lbNumber={"12"}
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
