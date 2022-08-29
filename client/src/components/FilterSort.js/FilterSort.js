import React, { useState } from "react";
import { Button, ListItemText, Menu, MenuItem, Box } from "@material-ui/core";

const FilterSort = () => {
  const [filter, setFilter] = useState(null);
  const [sort, setSort] = useState(null);

  const handleClickFilter = (event) => {
    setFilter(event.currentTarget);
  };

  const handleClickSort = (event) => {
    setSort(event.currentTarget);
  };

  const handleCloseFilter = () => {
    setFilter(null);
  };
  const handleCloseSort = () => {
    setSort(null);
  };
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickFilter}
        size="large"
      >
        Filter
      </Button>
      <Menu
        anchorEl={filter}
        keepMounted
        open={Boolean(filter)}
        onClose={handleCloseFilter}
      >
        <MenuItem>
          <ListItemText primary="All" />
        </MenuItem>
        <MenuItem>
          <ListItemText primary="Scheduled" />
        </MenuItem>

        <MenuItem>
          <ListItemText primary="Active" />
        </MenuItem>
        <MenuItem>
          <ListItemText primary="Invoicing" />
        </MenuItem>
        <MenuItem>
          <ListItemText primary="To priced" />
        </MenuItem>
        <MenuItem>
          <ListItemText primary="Completed" />
        </MenuItem>
      </Menu>

      <Button
        variant="contained"
        color="primary"
        onClick={handleClickSort}
        size="large"
      >
        Sort
      </Button>
      <Menu
        anchorEl={sort}
        keepMounted
        open={Boolean(sort)}
        onClose={handleCloseSort}
      >
        <MenuItem>
          <ListItemText primary="Newest" />
        </MenuItem>
        <MenuItem>
          <ListItemText primary="Oldest" />
        </MenuItem>
      </Menu>
    </div>
  );
};
export default FilterSort;
