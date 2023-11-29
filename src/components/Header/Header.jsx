import React from "react";
import navData from "@/data/navbar";
import Link from "next/link";

function Header() {
  return (
    <div className="w-full flex justify-between p-4 bg-transparent absolute top-0 left-0">
      <div>Logo</div>
      <div className="flex gap-10">
        {navData.map((data) => (
          <Link
            key={data.id}
            href={data.href}
            className="flex gap-10 text-xl items-center justify-center hover:border-b-2 border-red-800"
          >
            {data.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
