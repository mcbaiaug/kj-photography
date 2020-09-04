import React, {useState} from 'react'
import './App.css'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio/Portfolio'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Pricing from './Pages/Pricing/Pricing'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ErrorContext } from './Context/errorContext'


function App() {
  const [error, setError] = useState(false)
  return (
    <ErrorContext.Provider value={{error,setError}}>
      <Router>
        <div className="App">
          {/* <Nav /> */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/about" component={About} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/contact/:session" render={(props) => <Contact {...props} />} />
            {/* <Route path="/contact/" component={Contact}/> */}
            {/* <PrivateRoute path="/admin" component={Admin} /> */}
            {/* <Route path="/dashboard" component={Dashboard} /> */}
          </Switch>
        </div>
      </Router>
    </ErrorContext.Provider>

    // <div className="App">
    //   <Home />
    // </div>
  )
}

export default App
