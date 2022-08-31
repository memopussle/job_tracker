import React, { useEffect, useState } from "react";

import {
  useGetJobsQuery,
  useDeleteJobsMutation,
} from "../../features/api/apiSlice";

import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,
  Avatar,
  CardHeader,
  IconButton,
  Box,
  Container,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { formatDate } from "../../utils/formatDate";
import CommentIcon from "@material-ui/icons/Comment";
import useStyles from "./styles";
import { useLocation } from "react-router-dom";
import { filterByCategory, sortByDate, Sort, Filter } from "../index";
import { Link } from "react-router-dom";
import StatusButton from "../StatusButton.js/StatusButton";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

const JobList = ({ setCurrentId }) => {
  const classes = useStyles();
  const location = useLocation();

  const {
    data: jobs,
    isLoading: isGetLoading,
    isError: isGetError,
    error: getError,
    isSuccess: isGetSuccess,
  } = useGetJobsQuery();

  const [deleteJob] = useDeleteJobsMutation();

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

  let filteredJobs;

  //determine which jobs show depending on the path
  if (location.pathname === "/") {
    filteredJobs = filterJobs;
  } else if (location.pathname === "/scheduled") {
    filteredJobs = filterJobs.filter((job) => job.status === "scheduled");
  } else if (location.pathname === "/active") {
    filteredJobs = filterJobs.filter((job) => job.status === "active");
  }

  if (isGetLoading) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  } else if (isGetError) {
    return <Typography variant="h4">No jobs found!</Typography>;
  } else if (isGetSuccess) {
    return (
      <>
        <Container>
          {location.pathname === "/" && (
            <Filter filterBy={filterBy} handleChange={handleChange} />
          )}

          <Sort sortBy={sortBy} handleSort={handleSort} />
          <Grid container spacing={2}>
            {filteredJobs !== undefined &&
              filteredJobs?.map(
                (
                  {
                    _id,
                    title,
                    client,
                    job_description,
                    address,
                    email,
                    phone_number,
                    created,
                    status,
                  },
                  i
                ) => (
                  <Grid item xs={12} md={6} key={_id}>
                    <Card elevation={2}>
                      <CardHeader
                        avatar={
                          <Avatar className={classes.avatar}>
                            {client.slice(0, 1)}
                          </Avatar>
                        }
                        title={client}
                        subheader={formatDate(created)}
                        action={
                          <IconButton aria-label="settings">
                            <Link to="/addjob">
                              <MoreVertIcon
                                onClick={() => setCurrentId(_id)}
                                color="primary"
                              />
                            </Link>
                          </IconButton>
                        }
                      />

                      <CardContent>
                        <Typography variant="h5" component="h2">
                          {title}
                        </Typography>

                        <Typography variant="body1" component="p">
                          Description:
                          {location.pathname === "/"
                            ? job_description
                                .slice(0, 100)
                                .concat("...(see more)")
                            : job_description}
                        </Typography>

                        <Typography
                          color="textSecondary"
                          variant="body2"
                          component="p"
                        >
                          Phone number: {phone_number}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          variant="body2"
                          component="p"
                        >
                          Address: {address}
                        </Typography>
                        <Typography
                          color="textSecondary"
                          variant="body2"
                          component="p"
                        >
                          Email: {email}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          className={classes.action}
                        >
                          <StatusButton
                            status={status}
                            currentId={_id}
                            jobs={jobs}
                            i={i}
                          />
                          <div>
                            <IconButton
                              onClick={() => {
                                deleteJob(_id);
                              }}
                            >
                              <DeleteOutlinedIcon
                                color="primary"
                                style={{ cursor: "pointer" }}
                              />
                            </IconButton>

                            <IconButton>
                              <DeleteOutlinedIcon
                                color="primary"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  deleteJob(_id);
                                }}
                              />
                            </IconButton>
                            <IconButton>
                              <CommentIcon
                                color="primary"
                                style={{ cursor: "pointer" }}
                              />
                            </IconButton>
                          </div>
                        </Box>
                      </CardActions>
                    </Card>
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
