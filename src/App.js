import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main";
import Saved from "./components/Saved/Saved";

function App() {
  return (
    <Router>
      <Switch>   
      <Route exact path="/" component={Main} />
      <Route exact path="/Saved" component={Saved} />
      </Switch>
    </Router>
  );
}

export default App;