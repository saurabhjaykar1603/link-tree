import React from "react";

function LinkBox({ lbTitle, lbNumber, lbSvg, lbTheme }) {
  return (
    <div className="flex items-center p-8 bg-white shadow border rounded-lg">
      <div
        className={`bg-${lbTheme}-300 inline-flex flex-shrink-0 items-center justify-center h-16 w-16 rounded-full mr-5`}
      >
        <img src={`/svg/${lbSvg}.svg`} alt="" className="w-6" />
      </div>
      <div>
        <span className="inline-block text-2xl font-bold">{lbNumber}</span>
        <span className=" block text-gray-500">{lbTitle}</span>
      </div>
    </div>
  );
}

export default LinkBox;
