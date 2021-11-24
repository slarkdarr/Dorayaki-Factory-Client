import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import checkLogin from './checkLogin';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={checkLogin} />
      <Route path="/:param"  component={checkLogin}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
