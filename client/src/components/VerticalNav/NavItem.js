import React from 'react';
import { ListItem, ListItemText, Typography } from "@material-ui/core";

const NavItem = ({ category }) => {
   
  return (
    <ListItem button divider >
      <ListItemText primary={category} />
    </ListItem>
  );
}

export default NavItem