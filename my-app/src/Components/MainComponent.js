import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Web from "./WebsiteComponent";
import SkillDevelop from "./SkillsComponent";
import { DEVELOPSKILLS } from '../shared/developskills';
import { CMSSKILLS } from '../shared/cmsskills';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          developskills: DEVELOPSKILLS,
          cmsskills: CMSSKILLS
        };
    }

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

        const Skillslist = () => {
            return (
                <SkillDevelop developskills={this.state.developskills} cmsskills={this.state.cmsskills}/>
            )
        }
        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/skills" component={Skillslist} />
                    <Route exact path="/website" component={WebSite} />
                    <Redirect to="/home" />
                </Switch>   
            </div>
        )
    }
}

export default Main