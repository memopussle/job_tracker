import React, { useEffect, useState } from "react";
import { useGetJobsQuery } from "../../features/api/apiSlice";
import {
  Card,
  CardActions,
  CardContent,
  Button,
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



const JobList = ({setCurrentId}) => {
  const classes = useStyles();
  const location = useLocation();

  const {
    data: jobs,
    isLoading: isGetLoading,
    isError: isGetError,
    error: getError,
    isSuccess: isGetSuccess,
  } = useGetJobsQuery();
  


  //filter and sort
  const [filterBy, setFilterBy] = useState("all");
  const [sortBy, setSortBy] = useState("newest");


   const [filterJobs, setFilterJobs] = useState([]);

  useEffect(() => {
    const filtered = filterByCategory(jobs, filterBy);
    const sorted = sortByDate(filtered, sortBy)
    setFilterJobs(sorted);

  }, [filterBy, sortBy, jobs]);

  const handleChange = (event) => {
    setFilterBy(event.target.value);
  };

  const handleSort = (event) => {
    setSortBy(event.target.value);
  }


  if (isGetLoading) {
    return (
      <Typography variant="body2" align="center">
        Loading...
      </Typography>
    );
  } else if (isGetError) {
    return <div>{getError}</div>;
  } else if (isGetSuccess) {
    return (
      <>
        <Container>
          <Filter filterBy={filterBy} handleChange={handleChange} />
          <Sort sortBy={sortBy} handleSort={handleSort} />
          <Grid container spacing={2}>
         
              {filterJobs?.map(
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
                }) => (
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
                            <MoreVertIcon />
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
                          <Button
                            size="large"
                            variant="outlined"
                            color="primary"
                          >
                            {status}
                          </Button>
                          <CommentIcon color="primary" onClick={() => setCurrentId(_id)}  />
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
