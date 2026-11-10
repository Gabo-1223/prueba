/*!
=========================================================
* NexusTech & Gaming Store - v2.0.0
=========================================================
* Desarrollado por Angel Romero (GitHub: @Gabo-1223)
* Proyecto para la materia Electiva III
* Basado en Material Dashboard React (Creative Tim)
=========================================================
*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import { CartProvider } from "context/CartContext.js";

import "assets/css/material-dashboard-react.css?v=1.10.0";

ReactDOM.render(
  <CartProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </BrowserRouter>
  </CartProvider>,
  document.getElementById("root")
);
