import React, { useState } from "react";
import {AdminSidebar} from "./sidebar";
import {AdminOverview} from "../overview/overview";

export const AdminDashboard = () => {
    const [selectedSection, setSelectedSection] = useState("overview");
  const renderContent = () => {
    switch (selectedSection) {
      case "overview":
        return <AdminOverview />;

      default:
        return <AdminOverview />;
    }
  };
  return (
    <div className="tw-flex tw-h-screen tw-bg-gray-50">
      <AdminSidebar />
      <div className="tw-flex-1 tw-overflow-x-hidden">{renderContent()}</div>
    </div>
  );
};
