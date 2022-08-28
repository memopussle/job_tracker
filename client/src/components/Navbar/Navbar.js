import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

import useStyles from "./styles.js";

const Navbar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.nav}>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>All</MenuItem>
            <MenuItem onClick={handleClose}>Scheduled</MenuItem>
            <MenuItem onClick={handleClose}>Active</MenuItem>
            <MenuItem onClick={handleClose}>Invoicing</MenuItem>
            <MenuItem onClick={handleClose}>To priced</MenuItem>
            <MenuItem onClick={handleClose}>Completed</MenuItem>
            <MenuItem onClick={handleClose}>Add a new job</MenuItem>
          </Menu>

          <Typography variant="h6" className={classes.title}>
            Job Tracker
          </Typography>

          <div>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
