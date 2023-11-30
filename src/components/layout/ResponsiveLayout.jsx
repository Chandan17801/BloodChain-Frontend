import React from "react";

function ResponsiveLayout(props) {
  return (
    <div className="w-full">
      <div className="max-w-screen-2xl mx-auto relative">{props.children}</div>
    </div>
  );
}

export default ResponsiveLayout;
