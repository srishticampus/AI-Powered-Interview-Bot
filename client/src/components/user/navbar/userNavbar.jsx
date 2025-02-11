import { Bell, Star } from "lucide-react";
import { useLocation } from "react-router-dom";
import { PrimaryButton } from "../../ui/buttons/primaryBtn";
import { useNavigate } from "react-router-dom";
export const UserNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let activePage = location.pathname.split("/")[2];

  const navigatePage = (page) => {
    navigate(`/user/${page}`);
  };

  const navigateToLandingPage = () => {
    navigate("/");
  };
  return (
    <nav className="tw-container tw-mx-auto tw-px-16 tw-py-4">
      <div className="tw-flex tw-justify-between tw-items-center">
        <div
          className="tw-flex tw-items-center tw-space-x-2"
          onClick={navigateToLandingPage}
        >
          <Star className="tw-h-6 tw-w-6 tw-text-blue-600" />
          <span className="tw-text-xl tw-font-bold tw-text-gray-800">
            Lexsi
          </span>
        </div>
        <div className="tw-cursor-pointer tw-font-medium tw-flex tw-container tw-space-x-5 tw-w-6/12 tw-justify-around">
          <div onClick={navigateToLandingPage}>
            {" "}
            <span
              className={`${
                !activePage && "tw-text-lexiBlue-500 tw-underline"
              }`}
            >
              Home{" "}
            </span>
          </div>
          <div
            className="tw-cursor-pointer"
            onClick={() => {
              navigatePage("jobs");
            }}
          >
            <span
              className={`${
                activePage === "jobs" && "tw-text-lexiBlue-500 tw-underline"
              }`}
            >
              Jobs{" "}
            </span>
          </div>
          <div
            className="tw-cursor-pointer"
            onClick={() => {
              navigatePage("application-status");
            }}
          >
            <span
              className={`${
                activePage === "jobs" && "tw-text-lexiBlue-500 tw-underline"
              }`}
            >
              Application Status{" "}
            </span>
          </div>
          <div
            className="tw-cursor-pointer"
            onClick={() => {
              navigatePage("about");
            }}
          >
            {" "}
            <span
              className={`${
                activePage === "about" && "tw-text-lexiBlue-500 tw-underline"
              }`}
            >
              About{" "}
            </span>
          </div>
          <div
            className="tw-cursor-pointer"
            onClick={() => {
              navigatePage("contact");
            }}
          >
            {" "}
            <span
              className={`${
                activePage === "contact" && "tw-text-lexiBlue-500 tw-underline"
              }`}
            >
              Contact{" "}
            </span>
          </div>
        </div>
        <div className="tw-flex tw-gap-x-3 tw-items-center">
          <Bell />
          <h3>Hi, username</h3>
        </div>
      </div>
    </nav>
  );
};
