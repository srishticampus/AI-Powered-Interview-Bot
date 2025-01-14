import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../buttons/primaryBtn";
import { useState } from "react";

export const LandingNavbar = () => {
  const [activePage, setActivePage] = useState("home");
  return (
    <nav className="tw-container tw-mx-auto tw-px-16 tw-py-4">
      <div className="tw-flex tw-justify-between tw-items-center">
        <div className="tw-flex tw-items-center tw-space-x-2">
          <Star className="tw-h-6 tw-w-6 tw-text-blue-600" />
          <span className="tw-text-xl tw-font-bold tw-text-gray-800">
            Lexsi
          </span>
        </div>
        <div className=" tw-font-medium tw-flex tw-container tw-space-x-5 tw-w-4/12 tw-justify-around">
          <Link to="/">
            {" "}
            <span
              className={`${activePage === "home" && "tw-text-lexiBlue-500"}`}
            >
              Home{" "}
            </span>
          </Link>
          <Link to="/">
            {" "}
            <span
              className={`${activePage === "jobs" && "tw-text-lexiBlue-500"}`}
            >
              Jobs{" "}
            </span>
          </Link>
          <Link to="/">
            {" "}
            <span
              className={`${activePage === "about" && "tw-text-lexiBlue-500"}`}
            >
              About{" "}
            </span>
          </Link>
          <Link to="/">
            {" "}
            <span
              className={`${
                activePage === "contact" && "tw-text-lexiBlue-500"
              }`}
            >
              Contact{" "}
            </span>
          </Link>
        </div>
        <PrimaryButton text="Login" />
      </div>
    </nav>
  );
};
