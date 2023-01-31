import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import PersonalProfile from './views/personal-profile'
import PersonalSignup from './views/personal-signup'
import BusinessSignup from './views/business-signup'
import Login from './views/login'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={PersonalProfile} exact path="/personal-signup1" />
        <Route component={PersonalSignup} exact path="/personal-signup" />
        <Route component={BusinessSignup} exact path="/business-signup" />
        <Route component={Login} exact path="/login" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
