import Header from "@/components/Header/Header";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import React from "react";
import SearchCamps from "@/components/search/searchCamps";

function index() {
  return (
    <ResponsiveLayout>
      <Header />
      <SearchCamps />
    </ResponsiveLayout>
  );
}

export default index;
