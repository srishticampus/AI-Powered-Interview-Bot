import React from "react";
import {
  LayoutDashboard,
  Building2,
  Briefcase,
  Users,
  FileText,
  UserCog,
  LogOut,
  Star,
} from "lucide-react";

export const AdminSidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, text: "Dashboard", active: true },
    { icon: Building2, text: "Companies" },
    { icon: Briefcase, text: "Jobs" },
    { icon: Users, text: "Candidates" },
    { icon: FileText, text: "Applications" },
    { icon: UserCog, text: "Settings" },
  ];

  return (
    <div className="tw-w-64 tw-bg-white tw-border-r tw-border-gray-200 tw-flex tw-flex-col">
      <div className="tw-p-6">
        <div className="tw-flex tw-justify-center tw-items-center tw-gap-2">
          <Star className="tw-h-6 tw-w-6 tw-text-blue-600" />
          <span className="tw-text-xl tw-font-bold tw-text-gray-800">
            Lexi{" "}
          </span>
        </div>
      </div>

      <nav className="tw-flex-1 tw-px-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`tw-flex tw-items-center tw-px-4 tw-py-3 tw-mb-1 tw-rounded-lg tw-cursor-pointer
              ${
                item.active
                  ? "tw-bg-blue-50 tw-text-blue-600"
                  : "tw-text-gray-600 hover:tw-bg-gray-50"
              }`}
          >
            <item.icon className="tw-w-5 tw-h-5 tw-mr-3" />
            <span className="tw-font-medium">{item.text}</span>
          </div>
        ))}
      </nav>

      <div className="tw-p-4 tw-border-t">
        <div className="tw-flex tw-items-center tw-px-4 tw-py-3 tw-text-gray-600 hover:tw-bg-gray-50 tw-rounded-lg tw-cursor-pointer">
          <LogOut className="tw-w-5 tw-h-5 tw-mr-3" />
          <span className="tw-font-medium">Logout</span>
        </div>
      </div>
    </div>
  );
};
