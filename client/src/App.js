import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Meals from './pages/Meals';
import Workouts from './pages/Workouts';
import Home from './pages/Home';
import { useDispatch } from 'react-redux';
import { actionLoggedIn, actionLoggedOut } from './redux/actions/user';
import Dashboard from './pages/Dashboard';

function App() {
  const dispatch = useDispatch();
  fetch('/api/v1/users/current')
  .then(res => res.json())
  .then(data => {
    if (!data.error) {
      dispatch(actionLoggedIn(data))
    } else {
      dispatch(actionLoggedOut())
    }
  }, [dispatch])
  
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/workouts">
            <Workouts />
          </Route>
          <Route path="/meals">
            <Meals />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
