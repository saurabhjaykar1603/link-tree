import React from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function ShareButton() {
  const router = useRouter();
  const copyButton = () => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_LINK_TREE_FRONTEND_URL}/${router.query.handle}`
    );
    toast.success("Link coppied successfully");
  };
  return (
    <>
      <div
        className="absolute cursor-grab top-24 left-5 z-10 bg-purple-200 p-1 border-2 border-purple-500 rounded-lg :p-2"
        onClick={copyButton}
      >
        <img src="/svg/share.svg" alt="share" className="w-8" />
      </div>
    </>
  );
}

export default ShareButton;
