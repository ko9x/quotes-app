import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const location = useLocation();
  const key = location.pathname.substring(8)

  console.log('location', key); //@DEBUG

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log('event', event.target.comment.value); //@DEBUG

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

    return response

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
