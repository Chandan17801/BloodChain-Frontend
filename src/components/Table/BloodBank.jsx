import React from "react";

function BloodBank({ banks }) {
  return (
    <div>
      {banks.map((bank) => (
        <div className="header-gradient merri text-white p-4 text-center my-2 flex justify-around">
          <div>{bank.name}</div>
          <div>{bank.address}</div>
          <div>{bank.email}</div>
        </div>
      ))}
    </div>
  );
}

export default BloodBank;
