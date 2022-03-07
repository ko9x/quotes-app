import { useRef, useContext } from 'react';
import { context } from '../../pages/Quotes';
import { useLocation, useHistory } from 'react-router-dom';
import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const {fetchComments} = useContext(context)
  const commentTextRef = useRef();
  const location = useLocation();
  const key = location.pathname.substring(8)
  const history = useHistory();


  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here

    const response = fetch('https://react-http-max-54195-default-rtdb.firebaseio.com/quotes/' + key + '/comments.json', {
      method: "POST",
      body: JSON.stringify({
        text: event.target.comment.value
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => res.json()).then(data => console.log(data));

    fetchComments(key)
    // history.push('/quotes/')


  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
