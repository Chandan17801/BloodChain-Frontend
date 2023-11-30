import React from "react";

function HeaderStrip({ text }) {
  return (
    <div className="h-20 flex items-center header-gradient">
      <div className="text-2xl text-white pl-6 merri">{text}</div>
    </div>
  );
}

export default HeaderStrip;
