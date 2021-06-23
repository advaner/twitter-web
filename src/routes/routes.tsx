import React from "react"
import { Switch, Route } from "react-router-dom"

import Entry from "../pages/Entry"
import Login from "../pages/Login"
import Home from "../pages/Home"

const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={Entry}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/home" exact component={Home}/>
        </Switch>
    )
}

export default Routes