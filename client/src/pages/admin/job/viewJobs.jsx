import React, { useState } from "react";
import { ViewJobDetails } from "./viewJobDetails";
import { JobsList } from "./jobsList";

export const ViewJobs = () => {
  const [jobId, setJobId] = useState("");
  const clickOnJob = (id) => {
    setJobId(id);
  };
  console.log('jojb id', jobId)
  return (
    <>{jobId ? <ViewJobDetails /> : <JobsList clickOnJob={clickOnJob} />}</>
  );
};
