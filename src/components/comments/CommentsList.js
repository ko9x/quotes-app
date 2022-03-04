import CommentItem from "./CommentItem";
import { useLocation } from "react-router-dom";
import classes from "./CommentsList.module.css";
import { useEffect, useState, useContext } from "react";
import { context } from "../../pages/Quotes";
const CommentsList = (props) => {
  const {quotes} = useContext(context);
  console.log('quotes', quotes); //@DEBUG
  const location = useLocation();
  const key = location.pathname.substring(8);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log('here in comment list', ); //@DEBUG
    const tryComments = () => {
      for (let quote of quotes) {
        let comArr = [];
        if (quote.id === key) {
          for (const key in quote.comments) {
            comArr.push({
              id: key,
              text: quote.comments[key].text,
            });
          };
        };
        setComments(comArr);
      };
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
