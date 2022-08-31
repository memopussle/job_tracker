import React from "react";
import { List } from "@material-ui/core";
import useStyles from "./styles.js";
import NavItem from "./NavItem.js";

const VerticalNav = ({ setCurrentId}) => {
  const classes = useStyles();

  return (
    <List component="nav" aria-label="mailbox folders" className={classes.root}>
      <NavItem category="All" to="/" />

      <NavItem category="Scheduled" to="/scheduled" />

      <NavItem category="Active" to="/active" />

      <NavItem category="Invoicing" to="/invoicing" />
      <NavItem category="To priced" to="/topriced" />
      <NavItem category="Completed" to="/completed" />
      <NavItem
        category="Add a new job"
        to="/addjob"
        setCurrentId={() => {
          setCurrentId(null);
        
        }}
      />
    </List>
  );
};

export default VerticalNav;
