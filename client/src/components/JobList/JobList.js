import React, { useEffect, useState } from "react";
import { useGetJobsQuery } from "../../features/api/apiSlice";
import { Typography, Grid, Box, Container } from "@material-ui/core";

import useStyles from "./styles";
import { useLocation } from "react-router-dom";
import {
  filterByCategory,
  sortByDate,
  Sort,
  Filter,
  filterRoute,
  EachJob,
} from "../index";

import { CircularProgress } from "@material-ui/core";

const JobList = ({ setCurrentId }) => {
  const classes = useStyles();
  const location = useLocation();
  const { pathname } = location;
  const {
    data: jobs,
    isLoading: isGetLoading,
    isError: isGetError,
    isSuccess: isGetSuccess,
  } = useGetJobsQuery();

  //filter and sort
  const [filterBy, setFilterBy] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const [filterJobs, setFilterJobs] = useState([]);

  useEffect(() => {
    const filtered = filterByCategory(jobs, filterBy);
    const sorted = sortByDate(filtered, sortBy);
    setFilterJobs(sorted);
  }, [filterBy, sortBy, jobs]);

  const handleChange = (event) => {
    setFilterBy(event.target.value);
  };

  const handleSort = (event) => {
    setSortBy(event.target.value);
  };

  //determine which jobs show depending on the path
  const filterJobLists = filterRoute(pathname, filterJobs);

  if (isGetLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  } else if (isGetError) {
    return (
      <Typography variant="h4" align="center">
        No jobs found!
      </Typography>
    );
  } else if (isGetSuccess) {
    return (
      <>
        <Container className={classes.container}>
          {location.pathname === "/" && (
            <Filter filterBy={filterBy} handleChange={handleChange} />
          )}

          <Sort sortBy={sortBy} handleSort={handleSort} />
          <Grid container spacing={2}>
            {filterJobLists?.map(
              ({
                _id,
                title,
                client,
                job_description,
                address,
                email,
                phone_number,
                created,
                status,
                comments
              }) => (
                <Grid item xs={12} md={6} key={_id}>
                  <EachJob
                    client={client}
                    created={created}
                    setCurrentId={setCurrentId}
                    _id={_id}
                    title={title}
                    job_description={job_description}
                    phone_number={phone_number}
                    address={address}
                    email={email}
                    status={status}
                    jobs={jobs}
                    comments={comments}
                  />
                </Grid>
              )
            )}
          </Grid>
        </Container>
      </>
    );
  }
};

export default JobList;
