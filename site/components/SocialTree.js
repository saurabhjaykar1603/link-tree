import Link from "next/link";
import React from "react";

function SocialTree({ socialMedia }) {
  const { facebook, twitter, instagram, youtube, linkedin, github } =
    socialMedia;
  return (
    <>
      <div className="social flex justify-evenly  md:w-[400px] md:gap-x-4  mx-auto items-center">
        <Link target="_blank" href={`https://facebook.com/${facebook}`}>
          <img
            src="/svg/fb.svg"
            alt=""
            className="w-12 my-1 bg-slate-50 shadow-md p-1 border-2 border-blue-400 rounded-full hover:bg-blue-100 hover:scale-110 hover:translate-x-1 duration-200"
          />
        </Link>
        <Link target="_blank" href={`https://twitter.com/${twitter}`}>
          <img
            src="/svg/tw.svg"
            alt=""
            className="w-12 my-1 bg-slate-50 shadow-md p-1 border-2 border-blue-400 rounded-full hover:bg-blue-100 hover:scale-110 hover:translate-x-1 duration-200"
          />
        </Link>{" "}
        <Link target="_blank" href={`https://instagram.com/${instagram}`}>
          <img
            src="/svg/instagram.svg"
            alt=""
            className="w-12 my-1 bg-slate-50 shadow-md p-1 border-2 border-blue-400 rounded-full hover:bg-blue-100 hover:scale-110 hover:translate-x-1 duration-200"
          />
        </Link>{" "}
        <Link target="_blank" href={`https://youtube.com/@${youtube}`}>
          <img
            src="/svg/yt.svg"
            alt=""
            className="w-12 my-1 bg-slate-50 shadow-md p-1 border-2 border-blue-400 rounded-full hover:bg-blue-100 hover:scale-110 hover:translate-x-1 duration-200"
          />
        </Link>
        <Link target="_blank" href={`https://linkedin.com/${linkedin}`}>
          <img
            src="/svg/linkdn.svg"
            alt=""
            className="w-12 my-1 bg-slate-50 shadow-md p-2 border-2 border-blue-400 rounded-full hover:bg-blue-100 hover:scale-110 hover:translate-x-1 duration-200"
          />
        </Link>
        <Link target="_blank" href={`https://github.com/${github}`}>
          <img
            src="/svg/github.svg"
            alt=""
            className="w-12 my-1 bg-slate-50 shadow-md p-1 border-2 border-blue-400 rounded-full hover:bg-blue-100 hover:scale-110 hover:translate-x-1 duration-200"
          />
        </Link>
      </div>
    </>
  );
}

export default SocialTree;
