import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Web from "./WebsiteComponent";
import SkillBoard from "./SkillsComponent";
import Experiences from "./ExperienceComponent";
import Cert from "./CertComponents";
import Port from "./PortComponent";
import { SKILLS } from '../shared/skills';
import { EXPERIENCES } from "../shared/experiences";
import { CERTIFICATES } from "../shared/certificates";
import { PORTFOLIOS } from "../shared/portfolio"
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          skills: SKILLS,
          experiences: EXPERIENCES,
          certificates: CERTIFICATES,
          portfolios: PORTFOLIOS
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
                <SkillBoard skills={this.state.skills} />
            )
        }

        const Experienceslist = () => {
            return (
                <Experiences experiences={this.state.experiences} />
            )
        }

        const Certlist = () => {
            return (
                <Cert certificates={this.state.certificates} />
            )
        }

        const Portlist = () => {
            return (
                <Port portfolios={this.state.portfolios} />
            )
        }

        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/skills" component={Skillslist} />
                    <Route exact path="/website" component={WebSite} />
                    <Route exact path="/experiences" component={Experienceslist} />
                    <Route exact path="/certificates" component={Certlist} />
                    <Route exact path="/portfolio" component={Portlist} />
                    <Redirect to="/home" />
                </Switch>   
            </div>
        )
    }
}

export default Main