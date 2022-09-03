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
      setComment({
        ...comment,
        comment: chosenComment.comment,
        index: commentIndex,
      });
    }
  }, [commentIndex, comments.length, comments.comments]);

  const clear = () => {
    setComment({
      comment: "",
      createdAt: new Date(Date.now()),
      index: null,
    });
  };

  const postData = async () => {
    await fetch(`https://job-idenitifier.herokuapp.com/jobs/${id}/comments`, {
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
        }
      });
  };

  //update cmment
  const updateComment = async () => {
    await fetch(`https://job-idenitifier.herokuapp.com/jobs/${id}/comments`, {
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
        }
      });
  };

  //get comments 
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(
          `https://job-idenitifier.herokuapp.com/jobs/${id}`
        );
        const data = await response.json();
        setComments(data)
     
      };
      fetchData();
    }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setComment(comment);

    if (commentIndex >= 0 && comment.index !== null) {
      updateComment();
    } else {
      postData();
      clear()
    }
  };

  const handleChange = (e) => {
    setComment({ ...comment, comment: e.target.value });
  };

  return (
    <>
      <Typography variant="h5" className={classes.title}>Take Notes</Typography>
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
              className={classes.button}
              size="large"
              disabled={!comment}
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
            <Button
              className={classes.button}
              size="large"
              variant="outlined"
              color="primary"
              onClick={clear}
            >
              Clear
            </Button>
          </form>
        </Grid>
        <Grid item xs={12}>
          {comments.length !== 0 &&
            comments?.comments.map((comment, i) => (
              <div key={i}>
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
              </div>
            ))}
        </Grid>
      </Grid>
    </>
  );
};

export default CommentSection;
