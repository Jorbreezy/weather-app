import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Weekly Forcast</Link></li>
        <li><Link to="/day">Daily Forcast</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Weekly}/>
      <Route path="/day" component={Day}/>
    
    </div>
  </Router>
)

const Weekly = () => (
  <div>
    <h2>Weekly Forcast</h2>
  </div>
)

const Day = () => (
  <div>
    <h2>Daily Forcast</h2>
  </div>
)


export default BasicExample