import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import LayersIcon from "@material-ui/icons/Layers";
import LocalPharmacyIcon from "@material-ui/icons/LocalPharmacy";

const ListItems = () => {
  return (
    <div>
      <List>
        <ListItem button component={Link} to="/login">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Patient" />
        </ListItem>
        <ListItem button component={Link} to="/ward">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Ward" />
        </ListItem>
        <ListItem button component={Link} to="/pharmacy">
          <ListItemIcon>
            <LocalPharmacyIcon />
          </ListItemIcon>
          <ListItemText primary="Pharmacy" />
        </ListItem>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="More" />
        </ListItem>
      </List>
    </div>
  );
};

export default ListItems;
