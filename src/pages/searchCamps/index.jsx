import Header from "@/components/Header/Header";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import React from "react";
import SearchCampaign from "@/components/search/SearchCamps";

function index() {
  return (
    <ResponsiveLayout>
      <Header />
      <SearchCampaign />
    </ResponsiveLayout>
  );
}

export default index;
