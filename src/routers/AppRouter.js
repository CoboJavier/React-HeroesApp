import React, { useContext } from "react";

import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
//import { Navbar } from "../components/ui/NavBar";
import { LoginScreen } from "../components/login/LoginScreen";
//import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { AuthContext } from "../auth/AuthContext";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    
    const {user} = useContext(AuthContext)
    

    return (
        <Router>
            <div>
                
                
                <Switch>

                    <PublicRoute
                        path='/login' 
                        component={LoginScreen}
                        isAuthenticate={user.logged}
                    />

                    <PrivateRoute 
                        path='/' 
                        component={DashboardRoutes}
                        isAuthenticate={user.logged}
                    />

                    
                </Switch>
            </div>
        </Router>



    )
}