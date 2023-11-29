import React from "react";

function Header() {
  return (
    <div id="navbar" className="w-full flex justify-between p-4 bg-transparent absolute top-0 left-0">
      <div id="navbar-logo"></div>
      <div>
        <ul id="navbar-items" className="flex gap-10 text-xl items-center justify-center">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">About Us</li>
          <li className="navbar-item">Find Blood</li>
          <li className="navbar-item">Donor Login</li>
          <li className="navbar-item text-red-800 border-2 rounded-md p-2 border-black">Blood Bank Login</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;
