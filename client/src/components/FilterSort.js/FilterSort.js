import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Select } from "@material-ui/core";

const FilterSort = ({ filterBy, handleChange }) => {
  return (
    <FormControl>
      <InputLabel>Filter</InputLabel>
      <Select value={filterBy} onChange={handleChange}>
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="scheduled">Scheduled</MenuItem>
        <MenuItem value="active">Active</MenuItem>
        <MenuItem value="invoicing">Invoicing</MenuItem>
        <MenuItem value="toPriced">To Priced</MenuItem>
        <MenuItem value="completed">Completed</MenuItem>
      </Select>
    </FormControl>
  );
};
export default FilterSort;
