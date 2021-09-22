import React from 'react'
import { IoHome } from "react-icons/io5"
import { Button, Container, NavbarBrand, Navbar, Nav, NavDropdown } from "react-bootstrap"
import { BiArchive } from "react-icons/bi";
import { VscFileSubmodule } from "react-icons/vsc";
import '../SideNav.css'

function SideNav() {
    return (
        <Navbar className="Sidenav" sticky="bottom" collapseOnSelect expand="lg" bg="info" variant="light">
            <Navbar.Toggle aria-controls="moddingWebsitesNav" />
            <Navbar.Collapse id="moddingWebsitesNav">
            <Container>
                <Nav className=" me-auto container-fluid">
                    <NavbarBrand>Links to the Websites Mentioned</NavbarBrand>
                    <NavDropdown title="Modding websites" id="collasible-nav-dropdown">
                    <Nav.Link href="https://na.finalfantasyxiv.com/" ><IoHome />Home For FFXIV A Realm Reborn</Nav.Link>
                    <Nav.Link href="https://www.xivmodarchive.com/"> <BiArchive /> FFXIV ModArachive </Nav.Link>
                    <Nav.Link className="" href="https://www.nexusmods.com/finalfantasy14"><VscFileSubmodule />Nexus mods</Nav.Link>
                    </NavDropdown>
                </Nav>
            </Container>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default SideNav
