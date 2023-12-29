import React from "react";
import navData from "@/data/navbar";
import Link from "next/link";

function Header({ className }) {
  return (
    <div
      className={`w-full flex justify-between p-4 pr-0 bg-transparent merri ${className}`}
    >
      <div className="">Logo</div>
      <div className="flex gap-10 bg-white pr-4 pl-12 rounded-l-3xl h-14 border-[#6A0B32]">
        {navData.map((data) => (
          <Link
            key={data.id}
            href={data.href}
            className="py-3 flex gap-10 items-center text-[#6A0B32] justify-center hover:border-b-2 border-[#6A0B32] hover:pb-[10px]"
          >
            {data.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
