import React from 'react'
import '../SideNav.css'
import { IoHome } from "react-icons/io5";
import { Button } from "react-bootstrap"
function SideNav() {
    return (
        <div className="Sidebar">
            <ul>
                <h4>Links to the websites Mentioned</h4>
                    <li>
                    <Button color="primary"> <IoHome />
                    FFXIV Main page
                    </Button>
                    </li>
                    <li>
                    <Button color="primary">
                    FFXIV ModArachive
                    </Button>
                    </li>
                    <li>
                    <Button color="danger">
                    Nexus mods
                    </Button>
                    </li>
                
            </ul>
        </div>
    )
}

export default SideNav
