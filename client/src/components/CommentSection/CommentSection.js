import { Typography, Grid, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";


const CommentSection = ({ job }) => {
  const [comments, setComments] = useState([1, 2, 3, 4]);
  const [comment, setComment] = useState([]);
  const [newJob, setNewJob] = useState(job)

  const handleClick = () => {
  
  };
  return (
    <>
      <Typography variant="h5">Take Notes</Typography>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            minRows={4}
            multiline
            label="Your Note"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            style={{ marginTop: "1rem" }}
            size="large"
            disabled={!comment}
            variant="contained"
            onClick={handleClick}
            color="primary"
          >
            Submit
          </Button>
        </Grid>
        <Grid item xs={12}>
          {comments?.map((c, i) => (
            <Typography variant="body1">hello {i}</Typography>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default CommentSection;
