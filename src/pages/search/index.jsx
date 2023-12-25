import Header from "@/components/Header/Header";
import BloodBank from "@/components/Table/BloodBank";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import React, { useState } from "react";
import Search from "@/components/search/search";

function index() {
  const [bank, setBank] = useState([
    { name: "Devanand", address: "gorakhpur", email: "meriemail@email.com" },
    { name: "chudarshan", address: "gorakhpur", email: "meriemail@email.com" },
    { name: "Devanand", address: "gorakhpur", email: "meriemail@email.com" },
    { name: "Devanand", address: "gorakhpur", email: "meriemail@email.com" },
    { name: "Devanand", address: "bhokal", email: "meriemail@email.com" },
    { name: "Devanand", address: "gorakhpur", email: "meriemail@email.com" },
  ]);

  return (
    <ResponsiveLayout>
      <Header />
      <Search />
      <BloodBank banks={bank} />
    </ResponsiveLayout>
  );
}

export default index;
