import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const history = useHistory();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    const navTo = (destination) => {
      history.push('/quotes/' + destination)
    }

    // optional: Could validate here

    fetch('https://react-http-max-54195-default-rtdb.firebaseio.com/quotes.json', {
      method: 'POST',
      body: JSON.stringify({
        author: enteredAuthor,
        text: enteredText,
        comments: []
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => res.json()).then(data => navTo(data.name));
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
