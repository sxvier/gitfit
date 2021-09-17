import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Meals from './pages/Meals';
import Workouts from './pages/Workouts';
import Profile from './pages/Profile';
import About from './pages/About';
import Home from './pages/Home';

function App() {
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
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
