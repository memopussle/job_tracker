import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  menuIcon: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
