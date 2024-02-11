import React, { useEffect } from "react";
import { useRouter } from "next/router";

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
      <section className="main flex justify-center">
        <div className="text-white bg-gray-700 rounded-md">Dashboard</div>
      </section>
    </>
  );
}

export default dashbord;
