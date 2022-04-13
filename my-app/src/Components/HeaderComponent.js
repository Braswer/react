import React, { Component } from "react";
import LDToggle from "./LdToggleComponent";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

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

        return(
            <header className="sidenav">
                <Navbar expand="lg">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">
                        <img className="profile img-fluid" src="../assets/images/moon.png" alt="profile" />
                    </NavbarBrand>
                    <NavbarBrand><LDToggle /></NavbarBrand>
                    <NavbarBrand><button id="langen" class="langen" onclick="window.location.href='en'"></button></NavbarBrand>
                    <NavbarBrand><div id="firma" class="firma"></div></NavbarBrand>
                    <Collapse isOpen={!this.state.isNavOpen} navbar>
                        <Nav className="buttons">
                            <NavItem>
                                <NavLink onClick={this.closeNavbar} className="nav-link btn button1" to="/home">
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.closeNavbar} className="nav-link btn button2" to="/experiences">
                                    Esperienze
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.closeNavbar} className="nav-link btn button3" to="/skills">
                                    Conoscenze
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.closeNavbar} className="nav-link btn button4" to="/website">
                                    Website
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.closeNavbar} className="nav-link btn button5" to="/certificates">
                                    Certificati
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.closeNavbar} className="nav-link btn button6" to="/portfolio">
                                    Portfolio
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

export default Header


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
