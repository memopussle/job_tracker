import React from "react";
import { List } from "@material-ui/core";
import useStyles from "./styles.js";
import NavItem from "./NavItem.js";

const VerticalNav = () => {
  const classes = useStyles();

  return (
    <List component="nav" aria-label="mailbox folders" className={classes.root}>
      <NavItem category="All" />

      <NavItem category="Scheduled" />

      <NavItem category="Active" />

      <NavItem category="Invoicing" />
      <NavItem category="To priced" />
      <NavItem category="Completed" />
      <NavItem category="Add a new job" />
    </List>
  );
};

export default VerticalNav;
