import Link from "next/link";
import React from "react";

function LinkTreeCard({ title, url, image }) {
  return (
    <>
      <span className="w-full">
        <Link
          className="flex flex-row items-center p-2 rounded-xl text-white hover:text-black bg-blue-400 hover:bg-blue-300 mb-3 mx-2 hover:translate-x-1 hover:translate-y-1 transition-all duration-500"
          href={url}
        >
          <img
            src={image}
            alt=""
            className="bg-white rounded-md p-1 w-11 mr-5"
          />
          <h4 className="md:text-lg">{title}</h4>
        </Link>
      </span>
    </>
  );
}

export default LinkTreeCard;
