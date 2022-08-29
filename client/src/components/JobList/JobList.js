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
    IconButton,
  Box
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { formatDate } from "../../utils/formatDate";
import CommentIcon from "@material-ui/icons/Comment";
import useStyles from "./styles";

const JobList = () => {
     const classes = useStyles();
  const {
    data: jobs,
    isLoading: isGetLoading,
    isError: isGetError,
    error: getError,
    isSuccess: isGetSuccess,
  } = useGetJobsQuery();
  console.log(jobs);

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
              status,
            }) => (
              <Grid item xs={12} md={6} xl={4}>
                <Card key={_id} elevation={2}>
                  <CardHeader
                    avatar={
                      <Avatar color="inherit">{client.slice(0, 1)}</Avatar>
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
                      Description: {job_description}
                    </Typography>

                    <Typography
                      color="textSecondary"
                      variant="body2"
                      component="p"
                    >
                      Phone Number: {phone_number}
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
                    <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.action}>
                      <Button size="large" variant="outlined" color="primary">
                        {status}
                      </Button>
                      <CommentIcon color="primary" />
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            )
          )}
        </Grid>
      </>
    );
  }
};

export default JobList;
