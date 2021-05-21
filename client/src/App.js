import './App.css';
import Saved from './pages/Saved';
import Search from './pages/Search';
import Nav from './components/Nav';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      {/* stuff here displayed on all */}
      <Nav />
      <Header />
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
