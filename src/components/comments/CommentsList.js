import CommentItem from "./CommentItem";
import { useLocation } from "react-router-dom";
import classes from "./CommentsList.module.css";
import { useEffect, useState, useContext } from "react";
import { context } from "../../pages/Quotes";
const CommentsList = (props) => {
  const quotes = useContext(context);
  const location = useLocation();
  const key = location.pathname.substring(8);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const tryComments = () => {
      for (let quote of quotes) {
        let comArr = [];
        if (quote.id === key) {
          let i = quote.comments.length - 1;
          while (i > -1) {
            comArr.push(quote.comments[i]);
            i--;
          }
        }
        setComments(comArr);
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
