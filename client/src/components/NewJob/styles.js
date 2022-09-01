import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(0.5),
    },
  },
  submit: {
    marginTop: "0.5rem",
    marginRight: "0.5rem",
  },
  title: {
    marginTop: "2rem",
  },
}));
