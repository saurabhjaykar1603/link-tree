import React from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function ShareButton() {
  const router = useRouter();
  const copyButton = () => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_LINK_TREE_FRONTEND_URL}/${router.query.handle}`
    );
    toast.success("Link copied successfully");
  };
  return (
    <div
      className="toon-btn absolute cursor-pointer top-24 left-5 z-10 bg-white p-2.5"
      onClick={copyButton}
      title="Copy profile link"
    >
      <img src="/svg/share.svg" alt="share" className="w-7" />
    </div>
  );
}

export default ShareButton;
