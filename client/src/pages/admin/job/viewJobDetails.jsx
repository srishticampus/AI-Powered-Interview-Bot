import React from 'react';
import { MapPin, Briefcase, Calendar, Clock, Share2, Edit, Trash2, Twitter } from 'lucide-react';

export const ViewJobDetails = () => {
  const jobDetails = {
    title: 'Software Developer',
    location: 'Trivandrum, India',
    industryType: 'Information Technology',
    company: 'Google',
    datePosted: '05/12/2024',
    experience: '2+ Years',
    skills: 'Python, Java, SQL, and HTML',
    salary: '$3-5 LPA',
    jobType: 'Full Time',
    applications: '5 New | 182 Applications',
    description: `As a Software Developer at Google, you will be part of a dynamic and innovative team responsible for creating and maintaining cutting-edge software applications. This role involves collaborating with cross-functional teams to design, develop, and optimize scalable systems while ensuring high performance and security.`,
    responsibilities: [
      'Develop, test, and deploy software solutions in Python, Java, SQL, and HTML',
      'Collaborate with stakeholders to analyze business requirements and translate them into technical specifications',
      'Debug and resolve software issues to ensure seamless user experiences',
      'Optimize database performance using SQL and implement efficient queries',
      'Stay updated on emerging technologies and best practices to ensure state-of-the-art development'
    ],
    requiredSkills: [
      'Proficiency in Python, Java, SQL, and HTML',
      'Strong problem-solving skills and the ability to write clean, maintainable code',
      'Experience in building and managing scalable applications',
      'Knowledge of software design patterns and best practices'
    ],
    preferredSkills: [
      'Familiarity with cloud platforms like Google Cloud or AWS',
      'Understanding of front-end frameworks such as React & Angular',
      'Knowledge of DevOps practices and CI/CD pipelines'
    ],
    whyJoinUs: `At Google, we believe in fostering innovation and empowering individuals to achieve their full potential. Google has been making a difference as a global leader in technology, where you will work on exciting projects and grow your career in a supportive environment.`
  };

  return (
    <div className="tw-max-w-6xl tw-mx-auto tw-p-6">
      {/* Header Section */}
      <div className="tw-bg-blue-50 tw-rounded-xl tw-p-6 tw-mb-6">
        <div className="tw-flex tw-justify-between tw-items-start tw-mb-4">
          <div>
            <h1 className="tw-text-2xl tw-font-bold tw-text-gray-800 tw-mb-2">{jobDetails.title}</h1>
            <div className="tw-flex tw-flex-wrap tw-gap-4 tw-text-gray-600">
              <div className="tw-flex tw-items-center tw-gap-1">
                <MapPin className="tw-w-4 tw-h-4" />
                <span>{jobDetails.location}</span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-1">
                <Briefcase className="tw-w-4 tw-h-4" />
                <span>{jobDetails.industryType}</span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-1">
                <Calendar className="tw-w-4 tw-h-4" />
                <span>{jobDetails.datePosted}</span>
              </div>
              <div className="tw-flex tw-items-center tw-gap-1">
                <Clock className="tw-w-4 tw-h-4" />
                <span>{jobDetails.applications}</span>
              </div>
            </div>
          </div>
          <div className="tw-flex tw-gap-2">
            <button className="tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-text-blue-600 tw-bg-white tw-rounded-lg tw-border tw-border-blue-600 hover:tw-bg-blue-50">
              <Edit className="tw-w-4 tw-h-4" />
              Edit
            </button>
            <button className="tw-flex tw-items-center tw-gap-2 tw-px-4 tw-py-2 tw-text-red-600 tw-bg-white tw-rounded-lg tw-border tw-border-red-600 hover:tw-bg-red-50">
              <Trash2 className="tw-w-4 tw-h-4" />
              Delete
            </button>
            <button className="tw-flex tw-items-center tw-justify-center tw-w-10 tw-h-10 tw-bg-[#1DA1F2] tw-text-white tw-rounded-lg hover:tw-bg-[#1a8cd8]">
              <Twitter className="tw-w-5 tw-h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6">
        {/* Left Column - Job Info */}
        <div className="tw-space-y-6">
          <div className="tw-bg-white tw-rounded-xl tw-p-6 tw-shadow-sm">
            <h2 className="tw-text-lg tw-font-semibold tw-text-gray-800 tw-mb-4">Job Overview</h2>
            <div className="tw-space-y-4">  
              <div>
                <label className="tw-text-sm tw-text-gray-500"> Experience</label>
                <p className="tw-font-medium">{jobDetails.experience}</p>
              </div>
              <div>
                <label className="tw-text-sm tw-text-gray-500">Skills</label>
                <p className="tw-font-medium">{jobDetails.skills}</p>
              </div>
              <div>
                <label className="tw-text-sm tw-text-gray-500">Salary</label>
                <p className="tw-font-medium">{jobDetails.salary}</p>
              </div>
              <div>
                <label className="tw-text-sm tw-text-gray-500">Job Type</label>
                <p className="tw-font-medium">{jobDetails.jobType}</p>
              </div>
            </div>
          </div>
          <div className="tw-bg-white tw-rounded-xl tw-p-6 tw-shadow-sm">
            <h2 className="tw-text-lg tw-font-semibold tw-text-gray-800 tw-mb-4">Job Info</h2>
            <div className="tw-space-y-4">
              <div>
                <label className="tw-text-sm tw-text-gray-500">Experience</label>
                <p className="tw-font-medium">{jobDetails.experience}</p>
              </div>
              <div>
                <label className="tw-text-sm tw-text-gray-500">Skills</label>
                <p className="tw-font-medium">{jobDetails.skills}</p>
              </div>
              <div>
                <label className="tw-text-sm tw-text-gray-500">Salary</label>
                <p className="tw-font-medium">{jobDetails.salary}</p>
              </div>
              <div>
                <label className="tw-text-sm tw-text-gray-500">Job Type</label>
                <p className="tw-font-medium">{jobDetails.jobType}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Job Details */}
        <div className="md:tw-col-span-2 tw-space-y-6">
          <div className="tw-bg-white tw-rounded-xl tw-p-6 tw-shadow-sm">
            <h2 className="tw-text-lg tw-font-semibold tw-text-gray-800 tw-mb-4">Job Description</h2>
            <p className="tw-text-gray-600 tw-mb-6">{jobDetails.description}</p>

            <h3 className="tw-text-md tw-font-semibold tw-text-gray-800 tw-mb-3">Responsibilities:</h3>
            <ul className="tw-list-disc tw-list-inside tw-text-gray-600 tw-mb-6">
              {jobDetails.responsibilities.map((item, index) => (
                <li key={index} className="tw-mb-2">{item}</li>
              ))}
            </ul>

            <h3 className="tw-text-md tw-font-semibold tw-text-gray-800 tw-mb-3">Required Skills:</h3>
            <ul className="tw-list-disc tw-list-inside tw-text-gray-600 tw-mb-6">
              {jobDetails.requiredSkills.map((skill, index) => (
                <li key={index} className="tw-mb-2">{skill}</li>
              ))}
            </ul>

            <h3 className="tw-text-md tw-font-semibold tw-text-gray-800 tw-mb-3">Preferred Skills:</h3>
            <ul className="tw-list-disc tw-list-inside tw-text-gray-600 tw-mb-6">
              {jobDetails.preferredSkills.map((skill, index) => (
                <li key={index} className="tw-mb-2">{skill}</li>
              ))}
            </ul>

            <h3 className="tw-text-md tw-font-semibold tw-text-gray-800 tw-mb-3">Why Join Us?</h3>
            <p className="tw-text-gray-600">{jobDetails.whyJoinUs}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
