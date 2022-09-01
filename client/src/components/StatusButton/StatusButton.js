import React, { useState, useEffect } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import { useUpdateJobsMutation } from "../../features/api/apiSlice";

const StatusButton = ({ status, currentId, jobs }) => {
  const [value, setValue] = useState(status);
  const [updateJob] = useUpdateJobsMutation();

  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  useEffect(() => {
    // find the job matches with current id
    const chosenJob = jobs?.find((job) => {
      return job._id === currentId;
    });

    // update status of the job
    updateJob({ ...chosenJob, status: value });

  }, [currentId, jobs, value, updateJob]);

  return (
    <>
      <FormControl variant="outlined">
        <Select
          value={value}
          onChange={handleChange}
          style={{ color: "#115293" }}
        >
          <MenuItem value="scheduled">Scheduled</MenuItem>
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="invoicing">Invoicing</MenuItem>
          <MenuItem value="toPriced">To Priced</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default StatusButton;
