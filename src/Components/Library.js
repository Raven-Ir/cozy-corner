import React, {useState} from "react";
import '../index.css';
import Book from "./Book";
import { UserAuth } from "../context/AuthContext"; 


function Library () {
    const [userBooks, setUserBooks] = useState([]);

    return(
        <>
            <div className="w-full h-screen flex items-center justify-center">
                <div className="flex flex-col absolute left-0 ml-8" role = "group">
                    <button>Main Library</button>
                    <button>To Be Read</button>
                    <button>Did not Finish</button>
                </div>
                <div className="flex items-center justify-center bg-palette-1 h-[700px] w-2/3 rounded-[50px]">
                    {/* {userBooks.map((item, id) => (
                        <Book bookData={item}  key={id}/> 
                    ))} */}
                </div>

            </div>
        
        </>

    );

}

export default Library;