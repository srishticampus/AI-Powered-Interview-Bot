import React from "react";
import { MapPin, Briefcase, Clock, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
export const Applications = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/user/interview-preview");
  };
  return (
    <div className="tw-min-h-screen tw-bg-gray-50">
      {/* Header */}
      <header className="tw-bg-blue-50 tw-py-4">
        <h1 className="tw-text-center tw-text-2xl tw-font-semibold tw-text-gray-800">
          Application Status
        </h1>
      </header>

      <div className="tw-bg-gray-50 tw-py-4 tw-flex tw-justify-between tw-px-5">
        {/* Breadcrumb */}
        <div className="tw-container tw-mx-auto tw-px-4 tw-py-4">
          <div className="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-text-gray-600">
            <span>Home</span>
            <span>›</span>
            <span className="tw-text-gray-800">Application Status</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="tw-container tw-mx-auto tw-px-4 tw-w-80">
          <div className="tw-relative">
            <Search className="tw-absolute tw-left-3 tw-top-1/2 tw-h-5 tw-w-5 tw-transform tw-text-gray-400 -tw-translate-y-1/2" />
            <input
              type="text"
              placeholder="Search here..."
              className="tw-w-full tw-rounded-full tw-border tw-border-gray-200 tw-py-2 tw-pl-10 tw-pr-4 tw-outline-none focus:tw-border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="tw-container tw-mx-auto tw-px-4 tw-py-8">
        <div className="tw-rounded-xl tw-bg-white tw-p-6 tw-shadow-sm">
          <div className="tw-grid tw-grid-cols-1 tw-gap-8 md:tw-grid-cols-3">
            {/* Job Details */}
            <div className="tw-space-y-4">
              <div className="tw-flex tw-items-center tw-gap-4">
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                  alt="Google"
                  className="tw-h-8 tw-w-auto"
                />
                <div>
                  <h2 className="tw-text-xl tw-font-semibold">
                    Software Developer
                  </h2>
                  <p className="tw-text-sm tw-text-gray-600">Google</p>
                </div>
              </div>
              <p className="tw-text-sm tw-text-gray-600">
                Python, Java, SQL, HTML
              </p>
              <div className="tw-space-y-2">
                <div className="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-text-gray-600">
                  <MapPin className="tw-h-4 tw-w-4" />
                  <span>Trivandrum, India</span>
                </div>
                <div className="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-text-gray-600">
                  <Briefcase className="tw-h-4 tw-w-4" />
                  <span>Technology</span>
                </div>
                <div className="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-text-gray-600">
                  <Clock className="tw-h-4 tw-w-4" />
                  <span>Applied on 12/12/2024</span>
                </div>
              </div>
            </div>

            {/* Resume Status */}
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-space-y-2">
              <h3 className="tw-font-medium">Resume</h3>
              <p className="tw-text-sm tw-text-gray-600">12/01/2025</p>
              <span className="tw-inline-flex tw-items-center tw-gap-1 tw-rounded-full tw-bg-yellow-100 tw-px-3 tw-py-1 tw-text-sm tw-text-yellow-700">
                <span className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-yellow-500"></span>
                Under Review
              </span>
            </div>

            {/* Interview Rounds */}
            <div className="tw-grid tw-grid-cols-2 tw-gap-4">
              <div className="tw-rounded-lg tw-border tw-border-gray-200 tw-p-4 tw-text-center">
                <h3 className="tw-font-medium">Technical Round</h3>
                <p className="tw-mt-2 tw-text-sm tw-text-gray-600">
                  Not Scheduled Yet
                </p>
                <button
                  onClick={handleClick}
                  className="tw-bg-lexiBlue-500 tw-text-white tw-rounded-full tw-px-10 tw-py-2 tw-mt-3"
                >
                  Interview
                </button>
              </div>
              <div className="tw-rounded-lg tw-border tw-border-gray-200 tw-p-4 tw-text-center">
                <h3 className="tw-font-medium">HR Round</h3>
                <p className="tw-mt-2 tw-text-sm tw-text-gray-600">
                  Not Scheduled Yet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
