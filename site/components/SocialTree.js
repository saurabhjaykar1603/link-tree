import Link from "next/link";
import React from "react";

function SocialTree({ socialMedia }) {
  const { facebook, twitter, instagram, youtube, linkedin, github } =
    socialMedia || {};

  const socials = [
    { value: facebook, icon: "/svg/fb.svg", href: `https://facebook.com/${facebook}`, color: "bg-[#A5D8FF]" },
    { value: twitter, icon: "/svg/tw.svg", href: `https://twitter.com/${twitter}`, color: "bg-[#FFD93D]" },
    { value: instagram, icon: "/svg/instagram.svg", href: `https://instagram.com/${instagram}`, color: "bg-[#FF8FAB]" },
    { value: youtube, icon: "/svg/yt.svg", href: `https://youtube.com/@${(youtube || "").replace(/^@/, "")}`, color: "bg-[#C3F584]" },
    { value: linkedin, icon: "/svg/linkdn.svg", href: `https://linkedin.com/in/${linkedin}`, color: "bg-[#4ECDC4]" },
    { value: github, icon: "/svg/github.svg", href: `https://github.com/${github}`, color: "bg-[#FFB870]" },
  ].filter((s) => (s.value || "").trim());

  if (socials.length === 0) return null;

  return (
    <div className="social flex justify-center flex-wrap gap-4 md:gap-5 mx-auto items-center px-4 mt-4">
      {socials.map((s) => (
        <Link key={s.icon} target="_blank" href={s.href}>
          <span
            className={`toon-btn ${s.color} flex items-center justify-center w-14 h-14 !rounded-full toon-wiggle`}
          >
            <img src={s.icon} alt="" className="w-7" />
          </span>
        </Link>
      ))}
    </div>
  );
}

export default SocialTree;
