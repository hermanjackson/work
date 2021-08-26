

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  React from "react";
import { Navbar } from './components/navbar';
import injectContext from './front/appContext';
import { Home } from './front/home';
import { Services } from './front/Services';
import { Breadcrumb } from "./components/breadCrumb";
import SMSForm from "./front/smsForm";
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Breadcrumb/>   
    <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/Services">
          <Services/>
        </Route>
        <Route exact path="/smsForm">
          <SMSForm/>
        </Route>
       
       
      
     
      </Switch>
    </BrowserRouter>
      
    </div>
  );
}

export default injectContext(App);
