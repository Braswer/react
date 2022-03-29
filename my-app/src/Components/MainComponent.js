import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent"
import Web from "./WebsiteComponent"
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        const WebSite = () => {
            return (
                <Web />
            );
        }
        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/website" component={WebSite} />
                    <Redirect to="/home" />
                </Switch>   
            </div>
        )
    }
}

export default Main