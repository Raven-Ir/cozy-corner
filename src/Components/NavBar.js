import React from "react"
import '../index.css';
import { Link } from "react-router-dom";



function SideBar () {
    return (
        <>
           <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
            <Link to='/'>
                <h1 className="text-palette-5 text-4xl cursor pointer">Cozy Corner</h1>
            </Link>

           </div>
        </>
    );
}


export default SideBar;