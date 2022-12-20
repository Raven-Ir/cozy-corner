import React from "react";
import Profile1 from "../Assets/profile1.jpg"
import '../App.css'

export const UserProfile = () => {
    return(

        <div className="ProfileImage">
            <img src={Profile1} style = {{width: "100%", height: "100%", borderRadius: 50}} alt="User Profile Picture"/>
        
        </div>

    );
}