import React from "react";
import useStyles from "../styles";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Avatar,
  CardHeader,
  IconButton,
  Box,
} from "@material-ui/core";
import { formatDate } from "../../../utils/formatDate";
import { Link } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useLocation } from "react-router-dom";
import StatusButton from "../../StatusButton/StatusButton";
import {
  useGetJobsQuery,
  useDeleteJobsMutation,
} from "../../../features/api/apiSlice";
import CommentIcon from "@material-ui/icons/Comment";

const EachJob = ({
  client,
  created,
  setCurrentId,
  _id,
  title,
  job_description,
  phone_number,
  address,
  email,
  status,
  comments
}) => {
  const classes = useStyles();
  const location = useLocation();
  const { data: jobs } = useGetJobsQuery();
  const [deleteJob] = useDeleteJobsMutation(_id);

  return (
    <Card elevation={2}>
      <CardHeader
        avatar={
          <Avatar style={{ backgroundColor: "#115293" }}>
            {client.slice(0, 1)}
          </Avatar>
        }
        title={client}
        subheader={formatDate(created)}
        action={
          <IconButton aria-label="settings">
            <Link to="/addjob">
              <MoreVertIcon onClick={() => setCurrentId(_id)} color="primary" />
            </Link>
          </IconButton>
        }
      />

      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>

        <Typography variant="body1" component="p">
          Description:
          {location.pathname !== `/jobs/${_id}`
            ? job_description.slice(0, 100).concat("...(see more)")
            : job_description}
        </Typography>

        <Typography color="textSecondary" variant="body2" component="p">
          <PhoneOutlinedIcon fontSize="small" /> Phone number: {phone_number}
        </Typography>
        <Typography color="textSecondary" variant="body2" component="p">
          <LocationOnOutlinedIcon fontSize="small" />
          Address: {address}
        </Typography>
        <Typography color="textSecondary" variant="body2" component="p">
          <MailOutlineOutlinedIcon fontSize="small" /> Email: {email}
        </Typography>
      </CardContent>
      <CardActions>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          className={classes.action}
        >
          <StatusButton status={status} currentId={_id} jobs={jobs} />
          {location.pathname !== `/jobs/${_id}` && (
            <div>
              <IconButton onClick={() => deleteJob(_id)}>
                <DeleteOutlinedIcon
                  color="primary"
                  style={{ cursor: "pointer" }}
                />
              </IconButton>
              <Link to={`/jobs/${_id}`}>
                <IconButton>
                  <CommentIcon color="primary" style={{ cursor: "pointer" }} />
                </IconButton>
              </Link>
            </div>
          )}
          
        </Box>
      </CardActions>
    </Card>
  );
};

export default EachJob;
