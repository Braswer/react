import React, { Component } from "react";
import LanguageSelector from "./LangSelectorComponent";
import LDToggle from "./LdToggleComponent";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { withTranslation } from "react-i18next";

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: true
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    closeNavbar() {
        if (this.state.isNavOpen !== true) {
            this.toggleNavbar();
        }
    }


    render() {

        const { t } = this.props;

        return(
            <header className="sidenav">
                <Navbar expand="lg">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto">
                        <img className="profile img-fluid" src="../assets/images/moon.png" alt="profile" />
                    </NavbarBrand>
                    <NavbarBrand><LDToggle /></NavbarBrand>
                    <NavbarBrand><LanguageSelector /></NavbarBrand>
                    <NavbarBrand><div id="firma" class="firma"></div></NavbarBrand>
                    <Collapse isOpen={!this.state.isNavOpen} navbar>
                        <Nav className="buttons">
                            <NavItem>
                                <NavLink onClick={this.closeNavbar} className="nav-link btn button1" to="/home">
                                    {t("header.home")}
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.closeNavbar} className="nav-link btn button2" to="/experiences">
                                    {t("header.experience")}
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.closeNavbar} className="nav-link btn button3" to="/skills">
                                    {t("header.knowledge")}
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.closeNavbar} className="nav-link btn button4" to="/website">
                                    {t("header.website")}
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.closeNavbar} className="nav-link btn button5" to="/certificates">
                                    {t("header.certifications")}
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.closeNavbar} className="nav-link btn button6" to="/portfolio">
                                    {t("header.portfolio")}
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </div>
                </Navbar>
            </header>
        )
    }
}

const HeaderTrans = withTranslation()(Header)

export default HeaderTrans


/*
<div id="ld" class="ld"></div>
<button id="langen" class="langen" onclick="window.location.href='en'"></button>
<div id="firma" class="firma"></div>
<div id="profilebox" class="profilebox">
    <img id="profile" class="profile" src="/Media/profile.png" alt="profile">
</div>
<div id="buttons" class="buttons">
    <div id="button1" class="btn button1 current">home</div>
    <div id="button2" class="btn button2">esperienza</div>
    <div id="button3" class="btn button3">conoscenze</div>
    <div id="button4" class="btn button4">Website</div>
    <div id="button5" class="btn button5">contatti</div>
</div>
<a href="javascript:void(0);" class="hamb" onclick="hamburger()">
    <i class="fas fa-bars fa-3x"></i>
</a>

*/
