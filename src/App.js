import './App.css';
import Registeration from './components/Registeration';
import Login from './components/Login'
import Entry from './components/Entry'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Registeration}/>
          <Route path="/Login" exact component={Login} />
          <Route path="/Entry" exact component={Entry} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
