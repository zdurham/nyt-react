import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './pages/Main'
import NoMatch from './pages/NoMatch'
import Navbar from './components/Navbar'
import Saved from './pages/Saved'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/saved' component={Saved} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}
  

export default App;
