import React from "react";
import navData from "@/data/navbar";
import Link from "next/link";

function Header({ className }) {
  return (
    <div
      className={`w-full flex h-16 justify-between p-4 bg-transparent merri ${className}`}
    >
      <div>Logo</div>
      <div className="flex gap-10">
        {navData.map((data) => (
          <Link
            key={data.id}
            href={data.href}
            className="flex gap-10 text-xl items-center font-medium justify-center hover:border-b-2 border-red-800"
          >
            {data.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
