import React from 'react';
import { JobCard } from '../../landing/jobCard';

export const CompanyJobs = () => {
  const jobs = [
    {
      title: "Software Developer",
      skills: "Python, Java, SQL, HTML",
      company: "Google",
      location: "Trivandrum, India",
      date: "5 Nov",
      applications: "150",
      companyLogo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
    },
    {
      title: "Software Developer",
      skills: "Python, Java, SQL, HTML",
      company: "Twitter",
      location: "Trivandrum, India",
      date: "5 Nov",
      applications: "150",
      companyLogo: "https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png"
    },
    {
      title: "Software Developer",
      skills: "Python, Java, SQL, HTML",
      company: "Microsoft",
      location: "Trivandrum, India",
      date: "5 Nov",
      applications: "150",
      companyLogo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
    },
    {
        title: "Software Developer",
        skills: "Python, Java, SQL, HTML",
        company: "Google",
        location: "Trivandrum, India",
        date: "5 Nov",
        applications: "150",
        companyLogo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      },
      {
        title: "Software Developer",
        skills: "Python, Java, SQL, HTML",
        company: "Twitter",
        location: "Trivandrum, India",
        date: "5 Nov",
        applications: "150",
        companyLogo: "https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png"
      },
      {
        title: "Software Developer",
        skills: "Python, Java, SQL, HTML",
        company: "Microsoft",
        location: "Trivandrum, India",
        date: "5 Nov",
        applications: "150",
        companyLogo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
      },
      {
        title: "Software Developer",
        skills: "Python, Java, SQL, HTML",
        company: "Google",
        location: "Trivandrum, India",
        date: "5 Nov",
        applications: "150",
        companyLogo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      },
      {
        title: "Software Developer",
        skills: "Python, Java, SQL, HTML",
        company: "Twitter",
        location: "Trivandrum, India",
        date: "5 Nov",
        applications: "150",
        companyLogo: "https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png"
      },
      {
        title: "Software Developer",
        skills: "Python, Java, SQL, HTML",
        company: "Microsoft",
        location: "Trivandrum, India",
        date: "5 Nov",
        applications: "150",
        companyLogo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
      }
  ];

  return (
    <section className="tw-py-16 tw-px-4 tw-bg-lexiBlue-100">
        <div className="tw-text-center tw-mb-16 tw-bg-#f3f8ff">
          <h2 className="tw-text-4xl tw-font-bold text-[#3B4B7C] tw-mb-4">Job Vacancies!</h2>
          
        </div>
      <div className="tw-max-w-7xl tw-mx-auto">
        
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </div>
    </section>
  );
};
