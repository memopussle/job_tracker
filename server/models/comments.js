import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  content: String,
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
