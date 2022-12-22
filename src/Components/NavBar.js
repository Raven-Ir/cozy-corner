import React from "react"
import { Nav } from "react-bootstrap"


function SideBar () {
    return (
        <Nav defaultActiveKey="/myLibrary" className="flex-column ml-auto">
            <Nav.Link href="/home">My Library</Nav.Link>
            <Nav.Link href="/home">Explore</Nav.Link>
            <Nav.Link href="/home">Add Book</Nav.Link>
        </Nav>
    );
}

export default SideBar;