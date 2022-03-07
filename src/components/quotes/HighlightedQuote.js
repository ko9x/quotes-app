import classes from "./HighlightedQuote.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import Comments from "../comments/Comments";

const HighlightedQuote = (props) => {
  const params = useParams();
  const key = params.quoteId;
  const [quote, setQuote] = useState({});
  let loading = true;

  useEffect(() => {
    const getQuote = async () => {
      const response = await fetch(
        "https://react-http-max-54195-default-rtdb.firebaseio.com/quotes/" +
          key +
          ".json"
      );
      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      await setQuote(data);
    };

    getQuote();
  }, [key, props]);

  loading = false;

  return (
    <section>
      <figure className={classes.quote}>
      {loading && <LoadingSpinner />}
      {!loading && (
        <section>
          <p>{quote.text}</p>
          <figcaption>{quote.author}</figcaption>
        </section>
      )}
    </figure>
    <Comments props={quote}></Comments>
    </section>
  );
};

export default HighlightedQuote;
