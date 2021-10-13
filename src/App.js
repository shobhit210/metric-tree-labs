import './App.css';
import Login from './Components/Login';
import './bootstrap.min.css';
import Signup from './Components/Signup';
import Home from './Components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/home' component={Home} />
      </div>
    </Router>
  );
}

export default App;
