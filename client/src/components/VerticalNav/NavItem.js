import React from 'react';
import { ListItem, ListItemText } from "@material-ui/core";
import {Link} from "react-router-dom"

const NavItem = ({ category, to }) => {
   
  return (
    <ListItem button divider component={Link} to={to} >
      <ListItemText primary={category} />
    </ListItem>
  );
}

export default NavItem