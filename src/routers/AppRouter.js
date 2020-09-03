import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
//import { Navbar } from "../components/ui/NavBar";
import { LoginScreen } from "../components/login/LoginScreen";
//import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                
                
                <Switch>
                    <Route exact path="/login" component={LoginScreen}></Route>
                       
                    <Route path='/' component={DashboardRoutes}></Route>
                </Switch>
            </div>
        </Router>



    )
}