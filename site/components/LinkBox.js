import React from "react";

const themes = {
  red: "bg-[#FF8FAB]",
  blue: "bg-[#A5D8FF]",
  green: "bg-[#C3F584]",
  yellow: "bg-[#FFD93D]",
};

function LinkBox({ lbTitle, lbNumber, lbSvg, lbTheme }) {
  return (
    <div className="toon-card flex items-center p-6 bg-white">
      <div
        className={`${
          themes[lbTheme] || themes.yellow
        } inline-flex flex-shrink-0 items-center justify-center h-16 w-16 rounded-2xl border-[3px] border-[#1a1a2e] shadow-[3px_3px_0_#1a1a2e] mr-5`}
      >
        <img src={`/svg/${lbSvg}.svg`} alt="" className="w-7" />
      </div>
      <div>
        <span className="inline-block text-3xl font-extrabold text-[#1a1a2e]">
          {lbNumber}
        </span>
        <span className="block font-semibold text-[#3d3d5c]">{lbTitle}</span>
      </div>
    </div>
  );
}

export default LinkBox;
