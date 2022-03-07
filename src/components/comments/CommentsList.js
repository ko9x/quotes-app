import CommentItem from "./CommentItem";
import { useLocation } from "react-router-dom";
import classes from "./CommentsList.module.css";
import { useEffect, useState, useContext } from "react";
import { context } from "../../pages/Quotes";
const CommentsList = (props) => {
  const { quotes } = useContext(context);
  const location = useLocation();
  const key = location.pathname.substring(8);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const tryComments = async () => {
      for (let quote of quotes) {
        if (quote.id === key) {
          for (const key in quote.comments) {
            setComments((prevState) => [
              ...prevState,
              {
                id: key,
                text: quote.comments[key].text,
              },
            ]);
          }
        }
      }
    };

    tryComments();
  }, [key, quotes]);

  return (
    <ul className={classes.comments}>
      {comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
