import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { userType, userId, token, email } = useSelector((state) => state.auth);

 console.log(userType);

  return (
    <div className="absolute top-[10rem] right-0 w-20 h-10 bg-red-800 p-4 text-white">
  {userType === null && (
    <div>null</div>
  )}
  {userType === 'hospital' && (
    <div>null</div>
  )}
  {userType === 'users' && (
    <div>null</div>
  )}
  {userType === 'bloodbank' && (
    <div>null</div>
  )}
</div>

  );
};

export default Sidebar;
