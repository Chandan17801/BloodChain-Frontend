import React from "react";
import ResponsiveLayout from "../layout/ResponsiveLayout";
import Image from "next/image";
import creative from "@/assests/creative.jpg";

function Creative() {
  return (
    <ResponsiveLayout>
      <Image src={creative} className="mx-auto" width={700} height={700} />
    </ResponsiveLayout>
  );
}

export default Creative;
