import {
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  IconButton,
  CardHeader,
  Avatar,
  CardContent,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import useStyles from "./styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const CommentSection = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [count, setCount] = useState(0);
  const [commentIndex, setCommentIndex] = useState();
  const [comment, setComment] = useState({
    comment: "",
    createdAt: new Date(Date.now()),
  });


  const [comments, setComments] = useState([]);

  useEffect(() => {
    //find the comment based on clicked index
    if (comments.length !== 0 && commentIndex >= 0) {
      const chosenComment = comments?.comments[commentIndex];
      setComment({ ...comment, comment: chosenComment.comment });
    }
    console.log(comment)
  }, [commentIndex, comments.length,comments.comments]);

  const clear = () => {
    setComment({
      ...comment,
      comment: "",
    });
  };

  const postData = async () => {
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
  };

  //update cmment
  const updateComment = async () => {
    await fetch(`http://localhost:5000/jobs/${id}/comments`, {
      method: "PATCH",
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
          console.log("Successfully edited!");
          clear();
        }
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCount((prevCount) => prevCount++);

    setComment(comment);

    if (commentIndex) {
      console.log("updated");
      console.log(commentIndex)
      updateComment();
  
    } else {
      postData();
      console.log("created!")
    }
  
  };

  const handleChange = (e) => {
    setComment({ ...comment, comment: e.target.value });
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
          {comments.length !== 0 &&
            comments?.comments.map((comment, i) => (
              <>
                <Card elevation={2} className={classes.commentCard}>
                  <CardHeader
                    avatar={<Avatar className={classes.avatar}>R</Avatar>}
                    action={
                      <IconButton onClick={() => setCommentIndex(i)}>
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Ryan"
                    subheader={formatDate(comment.createdAt)}
                  />

                  <CardContent>
                    <Typography variant="body1">{comment.comment}</Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                    ></Typography>
                  </CardContent>
                </Card>
              </>
            ))}
        </Grid>
      </Grid>
    </>
  );
};

export default CommentSection;
