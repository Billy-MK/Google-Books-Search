import './App.css';
import Saved from './pages/Saved';
import Search from './pages/Search';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      {/* stuff here displayed on all */}
      <Switch>
        <Route exact path={["/", "/saved"]}>
          <Saved />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
