import Header from "@/components/Header/Header";
import Location from "@/components/UIElements/Location";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import React from "react";

function index() {
  return (
    <ResponsiveLayout>
      <Header />
      <Location />
    </ResponsiveLayout>
  );
}

export default index;
