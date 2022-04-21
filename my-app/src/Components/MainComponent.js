import React, { Component, Suspense } from "react";
import HeaderTrans from "./HeaderComponent";
import Home from "./HomeComponent";
import Web from "./WebsiteComponent";
import SkillBoard from "./SkillsComponent";
import ExpTrans from "./ExperienceComponent";
import CertTrans from "./CertComponents";
import Port from "./PortComponent";
import { SKILLS } from '../shared/skills';
import { EXPERIENCES } from "../shared/experiences";
import { EXPERIENCESENG } from "../shared/experienceseng";
import { CERTIFICATES } from "../shared/certificates";
import { PORTFOLIOS } from "../shared/portfolio";
import { Switch, Route, Redirect } from 'react-router-dom';
import "../i18n";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
          skills: SKILLS,
          experiences: EXPERIENCES,
          experienceseng: EXPERIENCESENG,
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
                <ExpTrans experiences={this.state.experiences} experienceseng={this.state.experienceseng}/>
            )
        }

        const Certlist = () => {
            return (
                <CertTrans certificates={this.state.certificates} />
            )
        }

        const Portlist = () => {
            return (
                <Port portfolios={this.state.portfolios} />
            )
        }

        return(
            <div>
                <Suspense fallback={null}>
                    <HeaderTrans />
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route exact path="/skills" component={Skillslist} />
                        <Route exact path="/website" component={WebSite} />
                        <Route exact path="/experiences" component={Experienceslist} />
                        <Route exact path="/certificates" component={Certlist} />
                        <Route exact path="/portfolio" component={Portlist} />
                        <Redirect to="/home" />
                    </Switch>   
                </Suspense>
            </div>
        )
    }
}

export default Main