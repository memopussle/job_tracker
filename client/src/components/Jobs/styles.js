import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  verticalNav: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));
