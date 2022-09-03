import { Typography, Grid, TextField, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CommentSection = ({ job, _id }) => {
  const { id } = useParams();
  const [count, setCount] = useState(0);
  const [comment, setComment] = useState({
    comment: "",
    index: count,
  });

  const [comments, setComments] = useState([]);

  const clear = () => {
    setComment({
      comment: "",
      index: count,
    });
  };


  const postData = async (e) => {
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
          setComments(data);
          console.log("Successfully addedd!");
          clear();
        }
      });
  }

  const handleSubmit = async (e) => {
     e.preventDefault();
    setCount((prevCount) => prevCount++)
    console.log(comments)
    setComment({ ...comment, index: count });

    postData();
  };


  const handleChange = (e) => {
    setComment({ comment: e.target.value, index: 0 });
  
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
              value={comment.comment}
              onChange={handleChange}
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
          {comments.length !== 0 && comments?.comments.map((comment, i) => (
            <Typography>{comment.comment}</Typography>
           ))}
        </Grid>
      </Grid>
    </>
  );
};

export default CommentSection;
