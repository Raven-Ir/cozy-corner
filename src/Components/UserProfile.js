import React from "react";
import Profile1 from "../Assets/profile.jpg"
import '../index.css'


export const UserProfile = () => {
    return(

        <div>
            <img src={Profile1} className="rounded-full w-12 h-12 shadow-md m-2"  alt="User1"/>
        
        </div>

    );
}