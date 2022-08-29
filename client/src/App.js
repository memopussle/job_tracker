import React from "react";
import { Routes, Route } from "react-router-dom";
import { NewJob, Navbar, VerticalNav, JobList } from "./components/index";
import { Grid } from "@material-ui/core";

const App = () => {
  return (
    <>
      <Navbar />

      <Grid container>
        <Grid item xs={4} md={3}>
          <VerticalNav />
        </Grid>
        <Grid item xs={8} md={9}>
          <Routes>
            <Route path="/" element={<JobList />} />
            <Route path="/addjob" element={<NewJob />} />
          </Routes>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
