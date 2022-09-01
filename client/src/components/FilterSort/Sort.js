import React from "react";
import { FormControl, MenuItem, InputLabel, Select } from "@material-ui/core";

const Sort = ({handleSort, sortBy}) => {
  return (
    <FormControl >
      <InputLabel>Sort</InputLabel>
      <Select value={sortBy} onChange={handleSort}>
        <MenuItem value="newest">Newest</MenuItem>
        <MenuItem value="oldest">Oldest</MenuItem>
      </Select>
    </FormControl>
  );
};
export default Sort;
