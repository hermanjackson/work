

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  React from "react";
import { Navbars } from './components/navbar';
import injectContext from './front/appContext';
import { Home } from './front/Home';
import  Contact  from "../src/front/Contact.js";
import { Breadcrumb } from "./components/breadCrumb";
import{Footer} from "./components/inc/footer"
import {About} from "../src/front/About.js"
import {Shop} from "../src/front/Shop"
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Breadcrumb/>   
    <Navbars/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/Contact">
          <Contact/>
        </Route>
        <Route exact path="/About">
          <About/>
        </Route>
        <Route exact path="/Shop">
          <Shop/>
        </Route>
       
       
      
     
      </Switch>
      <Footer/>
    </BrowserRouter>
      
    </div>
  );
}

export default injectContext(App);
