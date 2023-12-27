import React from "react";

export default function Search() {
  return (
    <div>
      <form>
        <div className="flex">
        <div className="w-1/2 flex p-4 gap-2">
            <select id="myDropdown" className="rounded-md border-gray-400 border-2 p-2 mx-4">
              <option value="Less than 10km" selected>Less than 10km</option>
              <option value="Less than 20km" >Less than 20km</option>
              <option value="Less than 50km" >Less than 50km</option>
              <option value="Greater than 50km" >Greater than 50km</option>
            </select>
          </div>
          <div className="w-1/2 flex p-4 gap-2 justify-end mr-5+">
            <input
              type="text"
              placeholder="Search.."
              className="rounded-md border-gray-400 border-2 p-2 ml-4"
            ></input>
            <button className="px-2 bg-black rounded-sm text-white font-semibold">Search</button>
          </div>
        </div>
      </form>
    </div>
  );
}
