import React from 'react'
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
            <button className='in'> Sign Up </button>
            <button className='up'> Sign In</button>
        </div>
    </div>
  )
}

export default Home;