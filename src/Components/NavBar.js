import React from "react"
import '../index.css';
import { Link } from "react-router-dom";
import Profile1 from "../Assets/profile.jpg"



function NavBar () {

    return (
        <>
           <div className="flex  justify-between w-full h-10 absolute">
                <Link to='/'>
                    <h1 className="text-palette-5 text-4xl cursor-pointer m-2">Cozy Corner</h1>
                </Link>

                <input type="text" className="bg-palette-1 rounded-3xl w-96 p-4 h-10 m-4" placeholder="Add a book?"/>
               
                <div>
                    <img src={Profile1} className="ring-black rounded-full w-12 h-12 shadow-md m-2" alt="User"/>
                </div>
            
           </div>
        </>
    );
}

export default NavBar;