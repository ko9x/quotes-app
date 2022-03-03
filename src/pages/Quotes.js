import { Switch, Route, Link, useLocation } from "react-router-dom";
import QuoteList from "../components/quotes/QuoteList";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import classes from "./Quotes.module.css";

const dummyQuotes = [
  {
    id: "q1",
    author: "Test",
    text: "Test",
  },
];

const Quotes = () => {

  const location = useLocation();

  return (
    <section>
      <Switch>
        <Route path="/quotes" exact>
          <QuoteList quotes={dummyQuotes} />
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
          <HighlightedQuote author={"Some Author"} text={"some text"} />
          <Comments />
        </Route>
      </Switch>
    </section>
  );
};

export default Quotes;
