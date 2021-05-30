import {Route, Switch } from "react-router-dom";
import SignUp from "./SignUp"
import Login from './Login'
import About from './About'
import Home from './Home'
import Navbar from './Navbar'
import Messages from './Messages'

function App(){
    return(<>
    <Navbar/>
<Switch>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/messages">
        <Messages />
      </Route>
    </Switch>
    </>
    )
}

export default App