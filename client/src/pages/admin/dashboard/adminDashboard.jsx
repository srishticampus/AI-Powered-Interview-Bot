import React, { act, useState } from "react";
import { AdminSidebar } from "./sidebar";
import { AdminOverview } from "../overview/overview";
import { AddCompany } from "../company/addCompany";
import { ViewCompany } from "../company/viewCompany";
import { AddJob } from "../job/addJob";
import { ViewJobs } from "../job/viewJobs";

export const AdminDashboard = () => {
  const [activeItem, setActiveItem] = useState("Overview");
  const [activeSubItem, setActiveSubItem] = useState("");

  const changeActiveItem = (newItem) => {
    setActiveItem(newItem);
    setActiveSubItem("");
  };
  const changeActiveSubItem = (newItem, newSubItem) => {
    setActiveItem(newItem);
    setActiveSubItem(newSubItem);
  };
  const renderContent = () => {
    const actualPage = activeSubItem || activeItem;
    switch (actualPage) {
      case "Overview":
        return <AdminOverview />;
      case "Add Company":
        return <AddCompany />;
      case "View Company":
        return <ViewCompany />;
      case "Add Job":
        return <AddJob />;
      case "View Job":
        return <ViewJobs />;
      default:
        return <AdminOverview />;
    }
  };
  return (
    <div className="tw-flex tw-h-screen tw-bg-gray-50">
      <AdminSidebar
        activeItem={activeItem}
        activeSubItem={activeSubItem}
        changeActiveItem={changeActiveItem}
        changeActiveSubItem={changeActiveSubItem}
      />
      <div className="tw-flex-1 tw-overflow-x-hidden">{renderContent()}</div>
    </div>
  );
};
