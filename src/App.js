import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import BuyNow from './Pages/Home/BuyNow/BuyNow';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/buynow/:id">
            <BuyNow />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
