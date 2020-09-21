import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route, Redirect} from "react-router-dom";
import SignIn from './components/signin/signin.js'
import SignUp from './components/signup/signup.js'

export const SignForms = [
  {
  
    title: "Sign in",
    path: "/signin",
    component: SignIn, // то зайти у акк
    // exact: true
  },
  {
    title: "Sign up",
    path: "/signup",
    component: SignUp, // то реєстрація
  },
];

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
              {SignForms.map(({path, component, exact = false}, index) => (
                  <Route path={path} exact={exact} key={index} component={component}/>
                  
              ))}
              {/* <Route path="/sign" exact component={Sign}/> */}
              <Route path="/" exact render={() => <Redirect to="/signin"/>}/>
              <Route exact render={() => <Redirect to="/signin"/>}/>
          </Switch>
      </div>
    </Router>

  );
}

export default App;

// forgot password - треба посунути наліво. нижні інпути всеодно вилазять
//відступ згори краще в пх