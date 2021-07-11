import React from 'react'
import '../SideNav.css'
import { IoHome } from "react-icons/io5"
import { Button } from "react-bootstrap"
import { BiArchive } from "react-icons/bi";
import { VscFileSubmodule } from "react-icons/vsc";

function SideNav() {
    return (
        <div className="Sidebar">
            <ul>
                <h4>Links to the websites Mentioned</h4>
                    <li>
                    <Button href="https://na.finalfantasyxiv.com/"> <IoHome />
                    <span>FFXIV Main page</span>
                    </Button>
                    </li>
                    <li>
                    <Button href="https://www.xivmodarchive.com/"> <BiArchive />
                    FFXIV ModArachive
                    </Button>
                    </li>
                    <li>
                    <Button href="https://www.nexusmods.com/finalfantasy14"> <VscFileSubmodule />
                    Nexus mods
                    </Button>
                    </li>
            </ul>
        </div>
    )
}

export default SideNav
