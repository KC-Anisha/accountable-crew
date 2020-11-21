import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from './components/layout/Navbar';
import CreateProject from "./components/projects/CreateProject";
import ProjectDetails from "./components/projects/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
    <div style = {{height:"100%", minHeight:"100vh"}}>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route  path='/project/:id' component={ProjectDetails}/>
        <Route  path='/signin' component={SignIn}/>
        <Route  path='/signup' component={SignUp}/>
        <Route  path='/create' component={CreateProject}/>
      </Switch>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fillOpacity="1" d="M0,192L40,170.7C80,149,160,107,240,122.7C320,139,400,213,480,208C560,203,640,117,720,96C800,75,880,117,960,128C1040,139,1120,117,1200,122.7C1280,128,1360,160,1400,176L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z" style={{darkreadeInlineFill:"#007acc"}}></path></svg>
      </div>
    </BrowserRouter>
  );
}

export default App;
