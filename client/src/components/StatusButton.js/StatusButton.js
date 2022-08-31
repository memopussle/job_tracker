import React, { useState, useEffect} from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import { useUpdateJobsMutation } from "../../features/api/apiSlice";

const StatusButton = ({ status, currentId, jobs, i }) => {
  const [value, setValue] = useState(status);

  const [childClicked, setChildClicked] = useState(null);
  const [updateJob] = useUpdateJobsMutation();
  

  const handleChange = (event) => {
    setChildClicked(i);
    event.preventDefault();
    setValue(event.target.value);
  
  };

  useEffect(() => {
    if (childClicked) {
      // find the job matches with current id
      const chosenJob = jobs?.find((job) => {
        return job._id === currentId;
      });


        updateJob({ ...chosenJob, status: value });
       console.log(chosenJob)
    }
  }, [childClicked, currentId, jobs, value]);


  return (
    <>
      <FormControl variant="outlined">
        <Select
          value={value}
          onChange={handleChange}
          style={{ color: "#3f51b5" }}
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
