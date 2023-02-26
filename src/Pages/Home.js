import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../index.css'
import axios from 'axios';
import Book from '../Components/Book';
import  requestsBestSellerNYT from '../ApiRequests';

const Home = () => {
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    axios.get(requestsBestSellerNYT.bookSeries)
      .then(results => setBooks(results.data.results.books))
      .catch(error => console.log(error));
  }, []);

  console.log(books);

  return (
    <>
    <div className='w-full h-screen'>
      <div className='flex justify-start'>
        <p className='l-cozy leading-[155px] ml-16 mt-64 text-[128px] text-palette-5 absolute h-[155px] w-[590px]'>
          Cozy Corner</p>
        <div className='h-[500px] absolute left-[500px] top-48 border-l-4 border-palette-5 '></div>
        <p className=' w-[600px] slogan absolute h-24 left-[550px] top-[300px] text-palette-5 leading-[48px] text-4xl'>
            An aesthetic library to keep track 
            of your books online
        </p>
        
      </div>

        <div className='p-2 m-4 flex justify-end'>
          <Link to='/login'>
            <button className='but ml-4 w-36 h-12 bg-palette-5 rounded-xl text-3xl shadow-inner text-palette-1'> Sign In </button>
          </Link>
          <Link to='/signup'>
            <button className='but ml-4 w-36 h-12 bg-palette-1 rounded-xl text-3xl shadow-inner text-palette-5'> Sign Up </button>
          </Link>
        </div>
        
        <div className='w-auto mt-[350px] ml-[550px] overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {books.map((item, id) => (
              <Book bookData={item}  key={id}/> 
            ))}
        </div>

    </div></>
  )
}

export default Home;

