import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href = "#brand">React-Bootstrap</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1} href = "#">
                                Search-List
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
