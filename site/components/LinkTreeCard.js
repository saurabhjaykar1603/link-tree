import Link from "next/link";
import React from "react";

const cardColors = [
  "bg-[#FFD93D]",
  "bg-[#FF8FAB]",
  "bg-[#4ECDC4]",
  "bg-[#A5D8FF]",
  "bg-[#C3F584]",
  "bg-[#FFB870]",
];

function LinkTreeCard({ title, url, image, index = 0 }) {
  return (
    <Link
      className={`toon-btn flex flex-row items-center gap-4 px-4 py-2.5 mb-4 mx-2 min-h-[52px] text-[#1a1a2e] ${
        cardColors[index % cardColors.length]
      }`}
      href={url || "#"}
      target="_blank"
    >
      <img
        src={image || "/images/link.png"}
        alt=""
        className="bg-white rounded-lg border-2 border-[#1a1a2e] p-1 w-10 h-10 object-contain shrink-0"
      />
      <h4 className="md:text-lg font-extrabold">{title || url}</h4>
    </Link>
  );
}

export default LinkTreeCard;
