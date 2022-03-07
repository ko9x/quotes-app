import { useState } from "react";
import CommentsList from "./CommentsList";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const handleShowComments = () => {
    setShowComments((prevState) => !prevState);
  };

  return (
    <section className={classes.comments}>
      <p
        style={{ color: "#008080", cursor: "pointer" }}
        onClick={handleShowComments}
      >
        {showComments ? "Hide" : "Show"} Comments
      </p>

      {showComments && <CommentsList />}
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm />}
    </section>
  );
};

export default Comments;
