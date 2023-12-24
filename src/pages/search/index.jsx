import Header from "@/components/Header/Header";
import BloodBank from "@/components/Table/BloodBank";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import React from "react";
import Search from "@/components/search/search";

function index() {
  return (
    <ResponsiveLayout>
      <Header />
      <Search />
      <BloodBank />
    </ResponsiveLayout>
  );
}

export default index;
