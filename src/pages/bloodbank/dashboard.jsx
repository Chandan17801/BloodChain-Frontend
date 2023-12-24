import Dashboard from "@/components/BloodBankDashboard/Dashboard";
import ResponsiveLayout from "@/components/layout/ResponsiveLayout";
import React from "react";

export default function dashboard() {
  return (
    <ResponsiveLayout>
      <Dashboard />
    </ResponsiveLayout>
  );
}
