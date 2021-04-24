import logo from './logo.svg';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import SignUp from "./page/SignUp"
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><SignUp /></Route>
      </Switch>

    </Router>
  );
}

export default App;
