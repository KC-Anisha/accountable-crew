import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
