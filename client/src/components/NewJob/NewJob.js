import React, { useState } from "react";
import {
  TextField,
  Container,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Grid,
  Box,
} from "@material-ui/core";
import useStyles from "./styles";

const NewJob = () => {
  const classes = useStyles();
  const [newJob, setNewJob] = useState({
    client: "",
    title: "",
    job_description: "",
    phone_number: "",
    address: "",
    created: "",
    email: "",
    status: "",
  });

  const handleChange = (e) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newJob);
  };
  return (
    <>
      <Container>
        <form
          onSubmit={handleSubmit}
          className={`${classes.root} ${classes.form}`}
          noValidate
          autoComplete="off"
        >
          <TextField
            name="client"
            label="Client Name"
            variant="outlined"
            value={newJob.client}
            fullWidth
            onChange={handleChange}
          />
          <TextField
            name="title"
            label="Title"
            variant="outlined"
            value={newJob.title}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="job_description"
            value={newJob.job_description}
            onChange={handleChange}
            label="Job Description"
            variant="outlined"
            fullWidth
          />
          <TextField
            name="phone_number"
            label="Phone Number"
            value={newJob.phone_number}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
          <TextField
            name="address"
            value={newJob.address}
            onChange={handleChange}
            label="Addresss"
            variant="outlined"
            fullWidth
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            value={newJob.email}
            onChange={handleChange}
            fullWidth
          />
          <Grid container spacing={6} mt={6}>
            <Grid item xs={6}>
              <Box display="flex" flexDirection="column">
                <TextField
                  name="created"
                  label="Created at"
                  type="datetime-local"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={newJob.created}
                  onChange={handleChange}
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box display="flex" flexDirection="column">
                <InputLabel>Status</InputLabel>
                <Select
                  name="status"
                  value={newJob.status}
                  onChange={handleChange}
                >
                  <MenuItem value="scheduled">Scheduled</MenuItem>
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="invoicing">Invoicing</MenuItem>
                  <MenuItem value="toPriced">To priced</MenuItem>
                  <MenuItem value="completed">Completed</MenuItem>
                </Select>
              </Box>
            </Grid>
          </Grid>

          <Button
            size="large"
            variant="contained"
            color="primary"
            type="submit"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
};

export default NewJob;
