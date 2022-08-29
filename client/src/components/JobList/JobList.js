import React from "react";
import { useGetJobsQuery } from "../../features/api/apiSlice";

const JobList = () => { 
    const { data: jobs, isLoading, isError, error } = useGetJobsQuery();
    console.log(jobs)
    return (
      <div>JobList</div>
  )

}

export default JobList;
