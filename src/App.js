import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch, Route, Redirect} from "react-router-dom";
import SignIn from './components/signin/signin.js'
import SignUp from './components/signup/signup.js'
// import { Container, ContainerTitle, Card, CardInfo, CardImg, CardTitle, CardText, BouncyDiv } from "./components/stylesComponents/stylesComponents";

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
              {SignForms.map(({path, component, exact = false}) => (
                  <Route path={path} exact={exact} component={component}/>
                  
              ))}
              {/* <Route path="/sign" exact component={Sign}/> */}
              <Route path="/" exact render={() => <Redirect to="/signin"/>}/>
          </Switch>
      </div>
    </Router>

  );
}

export default App;
