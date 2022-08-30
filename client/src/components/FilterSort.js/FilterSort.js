import React, { useState } from "react";
import {FormControl, MenuItem, InputLabel, Select } from "@material-ui/core";

const FilterSort = ({filter, handleChange}) => {
 
console.log(filter)
  return (
    <FormControl>
      <InputLabel>Filter</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={filter}
        onChange={handleChange}
      >
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
