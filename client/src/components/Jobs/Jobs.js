import React from "react";
import { Grid } from "@material-ui/core";
import useStyles from "./styles.js";
import { VerticalNav, JobList } from "../index";

const Jobs = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={4} md={3} className={classes.verticalNav}>
          <VerticalNav />
        </Grid>
        <Grid item xs={8} md={9}>
          <JobList />
        </Grid>
      </Grid>
    </>
  );
};

export default Jobs;
