import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import useStyles from "./styles.js";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import DescriptionRoundedIcon from "@material-ui/icons/DescriptionRounded";
import CreditCardRoundedIcon from "@material-ui/icons/CreditCardRounded";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
import ScheduleRoundedIcon from "@material-ui/icons/ScheduleRounded";
import { Link } from "react-router-dom";
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
      <NavItem category="Adda new job" />
    </List>
  );
};

export default VerticalNav;
