import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Weekly from './week.js'
import Day from './day.js'

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
 
export default BasicExample