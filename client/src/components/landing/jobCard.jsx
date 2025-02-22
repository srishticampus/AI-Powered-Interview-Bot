import React from "react";
import { MapPin, Clock, Settings, IndianRupee } from "lucide-react";
import { BACKEND_URL } from "../../apis/axiosInstance";

export const JobCard = ({ job, clickOnJob }) => {
  const companyLogo = job?.company?.company_logo;
  const companyLogoURL = companyLogo
    ? `${BACKEND_URL}/${companyLogo}`
    : `https://www.svgrepo.com/show/508699/landscape-placeholder.svg`;
  return (
    <div
      onClick={() => clickOnJob(job.id)}
      className="tw-cursor-pointer tw-bg-white tw-rounded-xl tw-p-6 tw-shadow-sm hover:tw-shadow-md tw-transition-shadow"
    >
      <div className="tw-flex tw-justify-between tw-items-start tw-mb-4">
        <div>
          <h3 className="tw-text-xl tw-font-semibold text-[#3B4B7C] tw-mb-2">
            {job?.job_title}
          </h3>
          <p className="tw-text-gray-600 tw-mb-2">{job?.required_skills}</p>
        </div>
        <img
          src={companyLogoURL}
          alt="logo"
          className="tw-w-8 tw-h-8 tw-object-contain"
        />
      </div>
      <div className="tw-space-y-3">
        <div className="tw-flex tw-items-center tw-text-gray-600">
          <MapPin className="tw-w-4 tw-h-4 tw-mr-2" />
          <span>Location: {job?.location}</span>
        </div>

        <div className="tw-flex tw-items-center tw-text-gray-600">
          <Clock className="tw-w-4 tw-h-4 tw-mr-2" />
          <span>Deadline: {job?.application_deadline} </span>
        </div>

        <div className="tw-flex tw-items-center tw-text-gray-600">
          <IndianRupee className="tw-w-4 tw-h-4 tw-mr-2" />
          <span>Salary: {job?.salary_range}</span>
        </div>
      </div>

      <button className="tw-w-full tw-mt-6 tw-bg-blue-600 hover:tw-bg-blue-700 tw-text-white tw-py-3 tw-px-6 tw-rounded-lg tw-flex tw-items-center tw-justify-center group tw-transition-all">
        Apply Now
        <svg
          className="tw-w-4 tw-h-4 tw-ml-2 group-hover:tw-translate-x-1 tw-transition-transform"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};
