import React, { useState } from 'react';

export const ApplicationBtnContainer = () => {
  const [activeTab, setActiveTab] = useState('technical');

  return (
    <div className="tw-min-h-20 tw-bg-gray-50 tw-flex tw-items-center tw-justify-center tw-p-6">
      <div className="tw-bg-white tw-rounded-full tw-p-2 tw-flex tw-gap-2 tw-shadow-sm">
        <button
          onClick={() => setActiveTab('requests')}
          className={`tw-px-6 tw-py-3 tw-rounded-full tw-text-base ${
            activeTab === 'requests'
              ? 'tw-bg-blue-600 tw-text-white'
              : 'tw-text-gray-600 hover:tw-bg-gray-100'
          } tw-transition-all tw-duration-200`}
        >
          Requests
        </button>
        <button
          onClick={() => setActiveTab('technical')}
          className={`tw-px-6 tw-py-3 tw-rounded-full tw-text-base ${
            activeTab === 'technical'
              ? 'tw-bg-blue-600 tw-text-white'
              : 'tw-text-gray-600 hover:tw-bg-gray-100'
          } tw-transition-all tw-duration-200`}
        >
          Technical Round
        </button>
        <button
          onClick={() => setActiveTab('hr')}
          className={`tw-px-6 tw-py-3 tw-rounded-full tw-text-base ${
            activeTab === 'hr'
              ? 'tw-bg-blue-600 tw-text-white'
              : 'tw-text-gray-600 hover:tw-bg-gray-100'
          } tw-transition-all tw-duration-200`}
        >
          HR Round
        </button>
      </div>
    </div>
  );
}
