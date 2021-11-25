import React from "react";
import { Route, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

// import Landing from "views/Landing.js";

class CheckValidateRoute extends React.Component {
    render() {
        if(sessionStorage.getItem('token')){
            return (
                <div>
                    {/* add routes with layouts */}
                    <Route path="/admin" component={Admin} />
                    <Route path="/auth" component={Auth} />
                    {/* add routes without layouts */}
                    {/* <Route path="/" exact component={Landing} /> */}
                    {/* add redirect for first page */}
                    <Redirect from="*" to="/admin/dashboard" />
                </div>
            )
        }else{
            return (
                <div>
                    <Route path="/auth/login" exact component={Auth} />
                    <Route path="/auth/register" exact component={Auth} />
                    <Redirect to="/auth/login"  />
                </div>
            )
        }
    }
}
export default CheckValidateRoute;