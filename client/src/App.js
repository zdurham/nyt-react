import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './pages/Main'
import NoMatch from './pages/NoMatch'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}
  

export default App;
