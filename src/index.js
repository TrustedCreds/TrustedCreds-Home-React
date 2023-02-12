import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import BusinessHRMS from './views/business-h-r-m-s'
import PersonalProfile from './views/personal-profile'
import PersonalSignup from './views/personal-signup'
import PersonalCredentials from './views/personal-credentials'
import BusinessVerificationCentre from './views/business-verification-centre'
import BusinessSignup from './views/business-signup'
import Login from './views/login'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={BusinessHRMS} exact path="/personal-signup12" />
        <Route component={PersonalProfile} exact path="/personal-signup1" />
        <Route component={PersonalSignup} exact path="/personal-signup" />
        <Route
          component={PersonalCredentials}
          exact
          path="/personal-signup11"
        />
        <Route
          component={BusinessVerificationCentre}
          exact
          path="/personal-signup111"
        />
        <Route component={BusinessSignup} exact path="/business-signup" />
        <Route component={Login} exact path="/login" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
