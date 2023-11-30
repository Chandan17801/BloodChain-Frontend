import Header from "@/components/Header/Header";
import BloodBank from "@/components/Table/BloodBank";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import React from "react";

function index() {
  return (
    <ResponsiveLayout>
      <Header />
      <h2 className="text-center my-8">Switcher</h2>
      <BloodBank />
    </ResponsiveLayout>
  );
}

export default index;
