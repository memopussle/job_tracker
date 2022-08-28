import React from "react";
import { List, ListItem, ListItemText, Paper } from "@material-ui/core";
import useStyles from "./styles.js";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import DescriptionRoundedIcon from "@material-ui/icons/DescriptionRounded";
import CreditCardRoundedIcon from "@material-ui/icons/CreditCardRounded";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
import ScheduleRoundedIcon from "@material-ui/icons/ScheduleRounded";
import { Link } from "react-router-dom";

const VerticalNav = () => {
  const classes = useStyles();

  return (

      <List
        component="nav"
        aria-label="mailbox folders"
        className={classes.root}
      >
        <ListItem button divider>
          <ListItemText primary="All" />
        </ListItem>

        <ListItem button divider>
          <ListItemText primary="Scheduled" />
          <ScheduleRoundedIcon color="primary" />
        </ListItem>
        <ListItem button divider>
          <ListItemText primary="Active" />
          <CheckCircleRoundedIcon color="primary" />
        </ListItem>

        <ListItem button divider>
          <ListItemText primary="Invoicing" />
          <DescriptionRoundedIcon color="primary" />
        </ListItem>

        <ListItem button divider>
          <ListItemText primary="To Priced" />
          <CreditCardRoundedIcon color="primary" />
        </ListItem>
        <ListItem button divider>
          <ListItemText primary="Completed" />
          <CheckCircleRoundedIcon color="primary" />
        </ListItem>
        <ListItem button divider component={Link} to="/addjob">
          <ListItemText primary="Add A New Job" />
          <WorkRoundedIcon color="primary" />
        </ListItem>
      </List>
   
  );
};

export default VerticalNav;
