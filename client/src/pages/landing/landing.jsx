import React from 'react';
import { Star, Search, ThumbsUp, Users } from 'lucide-react';

const Landing = () => {
  return (
    <div className="tw-min-h-screen tw-bg-gradient-to-br tw-from-blue-50 tw-to-white">
      {/* Navigation */}
      <nav className="tw-container tw-mx-auto tw-px-6 tw-py-4">
        <div className="tw-flex tw-justify-between tw-items-center">
          <div className="tw-flex tw-items-center tw-space-x-2">
            <Star className="tw-h-6 tw-w-6 tw-text-blue-600" />
            <span className="tw-text-xl tw-font-bold tw-text-gray-800">JobBoard</span>
          </div>
          <button className="tw-bg-blue-600 tw-text-white tw-px-6 tw-py-2 tw-rounded-full tw-hover:bg-blue-700 tw-transition-colors">
            Post a Job
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="tw-container tw-mx-auto tw-px-6 tw-py-16">
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-12 tw-items-center">
          <div>
            <div className="tw-inline-block tw-px-4 tw-py-2 tw-bg-blue-100 tw-rounded-full tw-mb-6">
              <span className="tw-text-blue-600 tw-font-medium">Your Career Starts Here!</span>
            </div>
            <h1 className="tw-text-5xl tw-font-bold tw-text-gray-900 tw-mb-6">
              Find Your Dream<br />
              <span className="tw-text-blue-600">Job Today</span>
            </h1>
            <p className="tw-text-gray-600 tw-text-lg tw-mb-8">
              Explore thousands of job opportunities from trusted employers. Whether you're starting
              your journey or looking for the next big step, we've got you covered.
            </p>
            
            {/* Search Bar */}
            <div className="tw-bg-white tw-p-2 tw-rounded-lg tw-shadow-lg tw-flex tw-items-center">
              <div className="tw-flex-1 tw-flex tw-items-center tw-px-4">
                <Search className="tw-h-5 tw-w-5 tw-text-gray-400 tw-mr-3" />
                <input
                  type="text"
                  placeholder="Search for jobs..."
                  className="tw-w-full tw-outline-none tw-text-gray-700"
                />
              </div>
              <button className="tw-bg-blue-600 tw-text-white tw-px-8 tw-py-3 tw-rounded-md tw-hover:bg-blue-700 tw-transition-colors">
                Search
              </button>
            </div>
          </div>

          <div className="tw-relative">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
              alt="Professional woman working"
              className="tw-rounded-2xl tw-shadow-2xl"
            />
            
            {/* Floating Cards */}
            <div className="tw-absolute -tw-top-4 -tw-left-4 tw-bg-white tw-p-4 tw-rounded-lg tw-shadow-lg">
              <div className="tw-flex tw-items-center tw-space-x-2">
                <Search className="tw-h-5 tw-w-5 tw-text-blue-600" />
                <span className="tw-text-sm tw-font-medium">Search Thousands of Verified Listings!</span>
              </div>
            </div>
            
            <div className="tw-absolute -tw-bottom-4 -tw-right-4 tw-bg-white tw-p-4 tw-rounded-lg tw-shadow-lg">
              <div className="tw-flex tw-items-center tw-space-x-2">
                <ThumbsUp className="tw-h-5 tw-w-5 tw-text-blue-600" />
                <span className="tw-text-sm tw-font-medium">Trusted by Thousands of Job Seekers!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="tw-mt-16 tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8">
          <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-shadow-lg">
            <Users className="tw-h-8 tw-w-8 tw-text-blue-600 tw-mb-4" />
            <h3 className="tw-text-2xl tw-font-bold tw-text-gray-900">200K+</h3>
            <p className="tw-text-gray-600">Active Users</p>
          </div>
          <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-shadow-lg">
            <Search className="tw-h-8 tw-w-8 tw-text-blue-600 tw-mb-4" />
            <h3 className="tw-text-2xl tw-font-bold tw-text-gray-900">50K+</h3>
            <p className="tw-text-gray-600">Job Listings</p>
          </div>
          <div className="tw-bg-white tw-p-6 tw-rounded-xl tw-shadow-lg">
            <Star className="tw-h-8 tw-w-8 tw-text-blue-600 tw-mb-4" />
            <h3 className="tw-text-2xl tw-font-bold tw-text-gray-900">98%</h3>
            <p className="tw-text-gray-600">Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
