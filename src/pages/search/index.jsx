import Header from "@/components/Header/Header";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import React from "react";
import Search from "@/components/search/search";

function index() {
  return (
    <ResponsiveLayout>
      <Header />
      <Search />
    </ResponsiveLayout>
  );
}

export default index;
