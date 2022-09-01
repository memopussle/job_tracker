import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetAJobQuery } from "../../features/api/apiSlice";
import { EachJob } from "../index";
import { Typography } from "@material-ui/core";

const EachJobPage = ({ setCurrentId }) => {
  const { id } = useParams();

  const {
    data: job,
    isLoading: isGetLoading,
    isError: isGetError,
    isSuccess: isGetSuccess,
  } = useGetAJobQuery(id);

  console.log(job?._id)
  if (isGetLoading) {
    return <CircularProgress />;
  } else if (isGetError) {
    return <Typography variant="h4">Sorry! Page cannot be loaded</Typography>;
  } else if (isGetSuccess) {
    return (
      <>
        {job && (
          <EachJob
            client={job?.client}
            created={job?.created}
            setCurrentId={setCurrentId}
            _id={job?._id}
            title={job?.title}
            job_description={job?.job_description}
            phone_number={job?.phone_number}
            address={job?.address}
            email={job?.email}
            status={job?.status}
          />
        )}
      </>
    );
  }
};

export default EachJobPage;
