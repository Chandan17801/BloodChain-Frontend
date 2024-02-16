import Header from "@/components/Header/Header";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import React from "react";
import SearchBloodBank from "@/components/search/searchBloodBank";

function index() {
  return (
    <ResponsiveLayout>
      <Header />
      <SearchBloodBank />
    </ResponsiveLayout>
  );
}

export default index;
