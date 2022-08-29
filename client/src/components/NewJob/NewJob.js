import React, { useState } from "react";
import {
  TextField,
  Container,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";

const NewJob = () => {
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
  return (
    <>
      <Container>
        <FormControl noValidate autoComplete="off">
          <TextField
            name="client"
            label="Client Name"
            variant="outlined"
            value=""
            fullWidth
          />
          <TextField
            name="title"
            value=""
            label="Title"
            variant="outlined"
            fullWidth
          />
          <TextField
            name="job_description"
            value=""
            label="Job Description"
            variant="outlined"
            fullWidth
          />
          <TextField
            name="phone_number"
            value=""
            label="Phone Number"
            variant="outlined"
            fullWidth
          />
          <TextField
            name="address"
            value=""
            label="Addresss"
            variant="outlined"
            fullWidth
          />
          <TextField
            name="email"
            value=""
            label="Email"
            variant="outlined"
            fullWidth
          />
          <TextField
            name="created"
            label="Created at"
            type="datetime-local"
            defaultValue="2022-09-06T10:30"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <FormControl>
            <InputLabel>Status</InputLabel>
            <Select value="" onChange="">
              <MenuItem value="scheduled">Scheduled</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="invoicing">Invoicing</MenuItem>
              <MenuItem value="toPriced">To priced</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
          </FormControl>
        </FormControl>
      </Container>
    </>
  );
};

export default NewJob;
