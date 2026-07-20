import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer
      aria-label="Site Footer"
      className="flex justify-center py-6 relative z-10"
    >
      <Link
        target="_blank"
        href="https://github.com/saurabhjaykar1603"
        className="toon-btn bg-white flex flex-row items-center gap-2 px-4 py-2"
      >
        <img
          src="/images/favicon.ico"
          alt=""
          className="h-6 w-6 hover:-rotate-45 transition-all duration-300"
        />
        <h5 className="text-[#7c3aed] font-extrabold">
          Developed by Saurabh 🎨
        </h5>
      </Link>
    </footer>
  );
}

export default Footer;
