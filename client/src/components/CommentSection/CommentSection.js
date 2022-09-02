import { Typography, Grid, TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CommentSection = ({ job, _id }) => {
  const { id } = useParams();
  console.log(id);
  const [comments, setComments] = useState([1, 2, 3, 4]);
  const [comment, setComment] = useState();
  console.log(comment)

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:5000/jobs/${id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(":(");
        }
      });
  };
  return (
    <>
      <Typography variant="h5">Take Notes</Typography>
      <Grid container>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
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
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </form>
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
