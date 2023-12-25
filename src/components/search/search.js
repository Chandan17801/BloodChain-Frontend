import React from "react";
import CustomizedTables from "../Table/Table";

export default function Search() {
  let blood_banks_list = [];

  return (
    <>
      <div className="search-container">
        {/* <ul>
          {items.map((item, index) => (
            <li key={index}>
              sa
              </li>
          ))}
        </ul> */}
        <CustomizedTables />
      </div>
    </>
  );
}
