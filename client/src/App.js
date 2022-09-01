import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { NewJob, Navbar, VerticalNav, JobList, EachJobDetails} from "./components/index";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";


const App = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);

  console.log(currentId);
  const pathNames = [
    "/",
    "/scheduled",
    "/active",
    "/invoicing",
    "/topriced",
    "/completed",
  ];

  console.log(currentId);

  return (
    <>
      <Navbar />

      <Grid container className={classes.grid}>
        <Grid item xs={0} sm={2} md={3}>
          <VerticalNav setCurrentId={setCurrentId} />
        </Grid>
        <Grid item xs={11} sm={10} md={9}>
          <Routes>
            {pathNames.map((pathName, i) => (
              <Route
                key={i}
                path={pathName}
                element={<JobList setCurrentId={setCurrentId} />}
              />
            ))}

            <Route path="/addjob" element={<NewJob currentId={currentId} />} />

            <Route path="/" element={<JobList setCurrentId={setCurrentId} />} />
            <Route path="/addjob" element={<NewJob currentId={currentId} />} />
            <Route path="/jobs/:id" element={<EachJobDetails setCurrentId={setCurrentId} />} />
          </Routes>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
