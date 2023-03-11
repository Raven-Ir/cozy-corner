import React, { useState } from "react";
import '../index.css';
import { Link, useNavigate } from "react-router-dom";
import Profile1 from "../Assets/profile.jpg";
import { UserAuth } from "../context/AuthContext";
import axios from "axios";

const NavBar = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [bookData, setBookData] = useState([]);

    const buttonLogOut = async () => {
        try {
            await logOut();
            navigate('/');
        } catch(error) {
            console.log(error);
        }
    };

    const searchBook = (evt) => {
        if (evt.key==='Enter'){
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
        .then(res => setBookData(res.data.items))
        .catch(err => console.log(err))
        }
    }
    
    console.log(bookData);


    return (
        <>
            <div>
            {user?.email ? (

                <div className="flex justify-between w-full p-1 absolute">
                    <Link to='/'>
                        <h1 className="text-palette-5 text-4xl cursor-pointer m-2">Cozy Corner</h1>
                    </Link>

                    <div> 
                        <input 
                            
                            type="text" 
                            className="bg-palette-1 rounded-3xl w-96 p-4 h-10 m-4"
                            placeholder="Add a book?"
                            onChange={(e) => {setSearch(e.target.value)}}
                            value={search}
                            onKeyUp={searchBook}
                        />
                    </div>
                    

                    <div className="flex justify-items-end"> 
                        <button onClick={buttonLogOut} className='but m-2 w-36 h-12 bg-palette-5 rounded-xl text-3xl text-palette-1'> Log Out </button>
                        <div>
                            <img src={Profile1} className="ring-black rounded-full w-12 h-12 shadow-md m-2" alt="User"/>
                        </div>
                    </div>
                </div>
            ) : (
                <div className=' flex justify-end p-4 '>
                    <Link to='/login'>
                        <button className='but ml-4 w-36 h-12 bg-palette-5 rounded-xl text-3xl text-palette-1'> Sign In </button>
                    </Link>
                    <Link to='/signup'>
                        <button className='but ml-4 w-36 h-12 bg-palette-1 rounded-xl text-3xl text-palette-5'> Sign Up </button>
                    </Link>
                </div>

            )}
            </div>
           
        </>
    );
}

export default NavBar;

