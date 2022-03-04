import { Route, Switch, Redirect } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import Quotes from "./pages/Quotes";
import AddQuote from "./pages/AddQuote";

function App() {
  return (
    <section>
      <MainNavigation />
      <Switch>
        <Route exact path="">
          <Redirect to="/quotes" />
        </Route>
      </Switch>
      <Switch>
        <Route path="/quotes" component={Quotes} />
      </Switch>
      <Switch>
        <Route path="/add-quote" component={AddQuote} exact />
      </Switch>
    </section>
  );
}

export default App;
