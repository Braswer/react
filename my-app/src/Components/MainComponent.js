import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Web from "./WebsiteComponent";
import SkillBoard from "./SkillsComponent";
import Experiences from "./ExperienceComponent";
import { DEVELOPSKILLS } from '../shared/developskills';
import { CMSSKILLS } from '../shared/cmsskills';
import { LANGSKILLS } from '../shared/langskills';
import { MORESKILLS } from "../shared/moreskills";
import { COMINGSKILLS } from "../shared/comingskills";
import { EXPERIENCES } from "../shared/experiences";
import { CERTIFICATES } from "../shared/certificates";
import { PORTFOLIOS } from "../shared/portfolio"
import { Switch, Route, Redirect } from 'react-router-dom';
import CertPort from "./CertPortComponents";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          developskills: DEVELOPSKILLS,
          cmsskills: CMSSKILLS,
          langskills: LANGSKILLS,
          moreskills: MORESKILLS,
          comingskills: COMINGSKILLS,
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
                <SkillBoard developskills={this.state.developskills} 
                    cmsskills={this.state.cmsskills}
                    langskills={this.state.langskills} 
                    moreskills={this.state.moreskills}
                    comingskills={this.state.comingskills} />
            )
        }

        const Experienceslist = () => {
            return (
                <Experiences experiences={this.state.experiences} />
            )
        }

        const CertPortlist = () => {
            return (
                <CertPort certificates={this.state.certificates}
                    portfolios={this.state.portfolios} />
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
                    <Route exact path="/certificates" component={CertPortlist} />
                    <Redirect to="/home" />
                </Switch>   
            </div>
        )
    }
}

export default Main