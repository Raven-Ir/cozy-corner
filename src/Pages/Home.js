import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css'

const Home = () => {
  return (
    <div>
        <h1 className='l-cozy'>Cozy Corner</h1>
        <div className='line'></div>
        <p className='slogan'>
            An aesthetic library to keep track 
            of your books online
        </p>
        <div className='buttons'>
          <Link to='/login'>
            <button className='in'> Sign In </button>
          </Link>
          <Link to='/signup'>
            <button className='up'> Sign Up</button>
          </Link>
        </div>
    </div>
  )
}

export default Home;