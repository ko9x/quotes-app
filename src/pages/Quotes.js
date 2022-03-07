import { Switch, Route } from "react-router-dom";
import QuoteList from "../components/quotes/QuoteList";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { useEffect, useState, createContext } from "react";

export const context = createContext({});
const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
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

  const fetchComments = () => {
    fetchQuotes();
  };

  const getQuotes = () => {
    return quotes
  }

  return (
    <context.Provider value={{ getQuotes: getQuotes, fetchComments: fetchComments}}>
      <Switch>
        <Route path="/quotes" exact>
          {quotes && <QuoteList quotes={quotes} />}
        </Route>
      </Switch>
      <Switch>
        <Route path="/quotes/:quoteId" exact>
          <HighlightedQuote />
        </Route>
        <Route path="/quotes/:quoteId/comments">
          <HighlightedQuote />
        </Route>
      </Switch>
    </context.Provider>
  );
};

export default Quotes;
