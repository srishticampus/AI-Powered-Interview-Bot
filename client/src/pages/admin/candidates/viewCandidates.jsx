import React, { useState } from "react";
import { Search, ChevronLeft, ChevronRight, FileText } from "lucide-react";
import { ApplicationBtnContainer } from "../../../components/admin/applicationButtons/applicationBtnContainer";

export const CandidatesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [showPdfModal, setShowPdfModal] = useState(false);

  // Dummy data for candidates
  const candidates = [
    {
      id: 1,
      name: "Priya",
      profile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      phone: "1234567890",
      email: "Priya@gmail.com",
      resume: "Priya.pdf",
      appliedJobs: 1,
    },
    {
      id: 2,
      name: "Rahul",
      profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      phone: "1234567890",
      email: "Rahul@gmail.com",
      resume: "Rahul.pdf",
      appliedJobs: 3,
    },
    {
      id: 3,
      name: "Pravin",
      profile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      phone: "1234567890",
      email: "Pravin@gmail.com",
      resume: "Pravin.pdf",
      appliedJobs: 5,
    },
    {
      id: 4,
      name: "John",
      profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      phone: "1234567890",
      email: "John@gmail.com",
      resume: "John.pdf",
      appliedJobs: 4,
    },
    // Add more dummy data to test pagination
    ...Array.from({ length: 6 }, (_, i) => ({
      id: i + 5,
      name: `Candidate ${i + 5}`,
      profile: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      phone: "1234567890",
      email: `candidate${i + 5}@gmail.com`,
      resume: `candidate${i + 5}.pdf`,
      appliedJobs: Math.floor(Math.random() * 5) + 1,
    })),
  ];

  // Filter candidates based on search term
  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredCandidates.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCandidates = filteredCandidates.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePdfClick = (pdf) => {
    setSelectedPdf(pdf);
    setShowPdfModal(true);
  };

  return (
    <>
      <h1 className=" tw-p-6 tw-text-2xl tw-font-bold tw-text-gray-800">
        Applications
      </h1>
      <ApplicationBtnContainer />

      <div className="tw-max-w-7xl tw-mx-auto tw-p-6">
        <div className="tw-flex tw-justify-between tw-items-center tw-mb-6">
          <h1 className="tw-text-2xl tw-font-bold tw-text-gray-800">
            View Candidates
          </h1>
          <div className="tw-relative">
            <Search className="tw-w-5 tw-h-5 tw-text-gray-400 tw-absolute tw-left-3 tw-top-1/2 tw-transform -tw-translate-y-1/2" />
            <input
              type="text"
              placeholder="Search candidates here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="tw-pl-10 tw-pr-4 tw-py-2 tw-w-80 tw-rounded-full tw-border tw-border-gray-300 focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-border-blue-500"
            />
          </div>
        </div>

        <div className="tw-bg-white tw-rounded-xl tw-shadow-sm tw-overflow-hidden">
          <table className="tw-w-full">
            <thead>
              <tr className="tw-bg-gray-50">
                <th className="tw-px-6 tw-py-3 tw-text-left tw-text-sm tw-font-semibold tw-text-lexiBlue-600">
                  S NO
                </th>
                <th className="tw-px-6 tw-py-3 tw-text-left tw-text-sm tw-font-semibold tw-text-lexiBlue-600">
                  Profile
                </th>
                <th className="tw-px-6 tw-py-3 tw-text-left tw-text-sm tw-font-semibold tw-text-lexiBlue-600">
                  Name
                </th>
                <th className="tw-px-6 tw-py-3 tw-text-left tw-text-sm tw-font-semibold tw-text-lexiBlue-600">
                  Phone Number
                </th>
                <th className="tw-px-6 tw-py-3 tw-text-left tw-text-sm tw-font-semibold tw-text-lexiBlue-600">
                  Email ID
                </th>
                <th className="tw-px-6 tw-py-3 tw-text-left tw-text-sm tw-font-semibold tw-text-lexiBlue-600">
                  Resume
                </th>
                <th className="tw-px-6 tw-py-3 tw-text-left tw-text-sm tw-font-semibold tw-text-lexiBlue-600">
                  Applied Jobs
                </th>
              </tr>
            </thead>
            <tbody className="tw-divide-y tw-divide-gray-200">
              {currentCandidates.map((candidate, index) => (
                <tr key={candidate.id} className="hover:tw-bg-gray-50">
                  <td className="tw-px-6 tw-py-4 tw-text-sm tw-text-gray-600">
                    {startIndex + index + 1}
                  </td>
                  <td className="tw-px-6 tw-py-4">
                    <img
                      src={candidate.profile}
                      alt={candidate.name}
                      className="tw-w-10 tw-h-10 tw-rounded-full tw-object-cover"
                    />
                  </td>
                  <td className="tw-px-6 tw-py-4 tw-text-sm tw-text-gray-600">
                    {candidate.name}
                  </td>
                  <td className="tw-px-6 tw-py-4 tw-text-sm tw-text-gray-600">
                    {candidate.phone}
                  </td>
                  <td className="tw-px-6 tw-py-4 tw-text-sm tw-text-gray-600">
                    {candidate.email}
                  </td>
                  <td className="tw-px-6 tw-py-4">
                    <button
                      onClick={() => handlePdfClick(candidate.resume)}
                      className="tw-flex tw-items-center tw-gap-1 tw-text-blue-600 hover:tw-text-blue-700"
                    >
                      <FileText className="tw-w-4 tw-h-4" />
                      <span className="tw-text-sm">{candidate.resume}</span>
                    </button>
                  </td>
                  <td className="tw-px-6 tw-py-4 tw-text-sm tw-text-gray-600">
                    {candidate.appliedJobs}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="tw-flex tw-justify-between tw-items-center tw-px-6 tw-py-4 tw-bg-gray-50">
            <div className="tw-flex tw-items-center tw-gap-2">
              <span className="tw-text-sm tw-text-gray-600">Show</span>
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="tw-rounded-md tw-border tw-border-gray-300 tw-text-sm"
              >
                <option value={4}>4</option>
                <option value={8}>8</option>
                <option value={12}>12</option>
              </select>
              <span className="tw-text-sm tw-text-gray-600">per page</span>
            </div>

            <div className="tw-flex tw-items-center tw-gap-2">
              <span className="tw-text-sm tw-text-gray-600">
                {startIndex + 1}-{Math.min(endIndex, filteredCandidates.length)}{" "}
                of {filteredCandidates.length}
              </span>
              <div className="tw-flex tw-gap-1">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="tw-p-2 tw-rounded-md tw-text-gray-600 hover:tw-bg-gray-100 disabled:tw-opacity-50 disabled:tw-cursor-not-allowed"
                >
                  <ChevronLeft className="tw-w-5 tw-h-5" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`tw-px-3 tw-py-1 tw-rounded-md tw-text-sm
                    ${
                      currentPage === page
                        ? "tw-bg-blue-600 tw-text-white"
                        : "tw-text-gray-600 hover:tw-bg-gray-100"
                    }`}
                    >
                      {page}
                    </button>
                  )
                )}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="tw-p-2 tw-rounded-md tw-text-gray-600 hover:tw-bg-gray-100 disabled:tw-opacity-50 disabled:tw-cursor-not-allowed"
                >
                  <ChevronRight className="tw-w-5 tw-h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* PDF Modal */}
        {showPdfModal && (
          <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-items-center tw-justify-center">
            <div className="tw-bg-white tw-rounded-xl tw-p-6 tw-w-11/12 tw-h-5/6">
              <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
                <h2 className="tw-text-xl tw-font-semibold tw-text-gray-800">
                  Resume Preview
                </h2>
                <button
                  onClick={() => setShowPdfModal(false)}
                  className="tw-text-gray-500 hover:tw-text-gray-700"
                >
                  ×
                </button>
              </div>
              <iframe
                src={`/dummy-path/${selectedPdf}`}
                className="tw-w-full tw-h-full tw-rounded-lg"
                title="Resume Preview"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
