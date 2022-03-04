import { Switch, Route, Link, useLocation, useHistory } from "react-router-dom";
import QuoteList from "../components/quotes/QuoteList";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import classes from "./Quotes.module.css";
import { useEffect, useState, createContext } from "react";

export const context = createContext({});
const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const history = useHistory();

  const fetchQuotes = async () => {
    console.log('here in quotes', ); //@DEBUG
    const response = await fetch(
      "https://react-http-max-54195-default-rtdb.firebaseio.com/quotes.json"
    );

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();

    const list = [];

    for (const key in data) {
      list.push({
        id: key,
        author: data[key].author,
        text: data[key].text,
        comments: data[key].comments,
      });
    }

    setQuotes(list);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchComments = (key) => {
    fetchQuotes();
    history.push('/quotes/')
  };

  const location = useLocation();

  return (
    <context.Provider value={{ quotes: quotes, fetchComments: fetchComments}}>
      <Switch>
        <Route path="/quotes" exact>
          {quotes && <QuoteList quotes={quotes} />}
        </Route>
      </Switch>
      <Switch>
        <Route path="/quotes/:quoteId" exact>
          <HighlightedQuote author={"Some Author"} text={"some text"} />
          <div className={classes.comments}>
            <Link
              style={{ textDecoration: "none", color: "#008080" }}
              to={location.pathname + "/comments"}
            >
              Load Comments
            </Link>
          </div>
        </Route>
        <Route path="/quotes/:quoteId/comments">
          <HighlightedQuote />
        </Route>
      </Switch>
    </context.Provider>
  );
};

export default Quotes;
