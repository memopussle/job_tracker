import React from "react";
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
  IconButton
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const JobList = () => {
  const {
    data: jobs,
    isLoading: isGetLoading,
    isError: isGetError,
    error: getError,
    isSuccess: isGetSuccess,
  } = useGetJobsQuery();
  console.log(jobs);
  return (
    <>
      <Grid container spacing={2}>
        {jobs?.map(
          ({
            _id,
            title,
            client,
            job_description,
            address,
            email,
            phone_number,
            created,
          }) => (
            <Grid item xs={12} md={6} xl={4}>
              <Card key={_id} elevation={2}>
                <CardHeader
                  avatar={<Avatar color="inherit">R</Avatar>}
                  title={client}
                  subheader={created}
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

                  <Typography variant="body2" component="p">
                    Description: {job_description}
                  </Typography>
                  <Typography>Contact details:</Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                    component="p"
                  >
                    {phone_number}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                    component="p"
                  >
                    {address}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                    component="p"
                  >
                    {email}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          )
        )}
      </Grid>
    </>
  );
};

export default JobList;
