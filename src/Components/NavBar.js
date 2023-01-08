import React from "react"
import { Nav } from "react-bootstrap"
import '../index.css';



function SideBar () {
    return (
        <>
            <h1 className='CozyCorner' fixed="top" >Cozy Corner</h1>
            <div className="side-bar">

                <Nav defaultActiveKey="/myLibrary" className="flex-column">
                    <Nav.Link href="/home">My Library</Nav.Link>
                    <Nav.Link href="/home">Explore</Nav.Link>
                    <Nav.Link href="/home">Add Book</Nav.Link>
                </Nav>
            </div>
        </>
    );
}


export default SideBar;