import React from 'react'
import './App.css'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App" >
      {/* <Nav /> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        {/* <Route path="/shop" component={Shop} /> */}
        {/* <Route path="/register" component={SignUp} /> */}
        {/* <Route path="/login" component={SignIn} /> */}
        {/* <PrivateRoute path="/admin" component={Admin} /> */}
        {/* <Route path="/dashboard" component={Dashboard} /> */}
      </Switch>
    </div>
  </Router>
 
    // <div className="App">
    //   <Home />
    // </div>
  )
}

export default App
