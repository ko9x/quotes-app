import { Route, Switch } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import Quotes from "./pages/Quotes";
import AddQuote from "./pages/AddQuote";
import QuoteDetails from "./pages/QuoteDetails";

function App() {
  return (
    <section>
      <MainNavigation></MainNavigation>
      <Switch>
        <Route path="/quotes" component={Quotes} exact></Route>
      </Switch>
      <Switch>
        <Route path="/add-quote" component={AddQuote} exact></Route>
      </Switch>
      <Switch>
        <Route path="/quotes/:quoteID" component={QuoteDetails}></Route>
      </Switch>
    </section>
  );
}

export default App;
