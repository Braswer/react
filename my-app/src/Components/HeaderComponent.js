import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    render() {
        return(
            <header className="sidenav">
                <Navbar dark expand="md">
                    <div className='container'>
                        <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">
                        <img src='assets/images/logo.png' height="30" width="41" alt="Ristorante Con Fusion" />
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className="fa fa-info fa-lg"></span> About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className="fa fa-list fa-lg"></span> Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-address-card fa-lg"></span> Contact Us
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
