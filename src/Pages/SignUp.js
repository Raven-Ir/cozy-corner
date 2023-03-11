import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import BooksImageFooter from '../Assets/books.png'


const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  
  const { user, signUp } = UserAuth();

  const formSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      await signUp(email, password, userName);
      navigate('/library');

    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  }

  return (
    <>
      <div className='w-full h-fit'>
         <div className='fixed w-full py-[78px] z-50'>
         <h1 className='text-5xl p-2 font-bold text-palette-5 text-center'>Welcome, to Cozy Corner</h1>
          <div className='max-w-[450px] h-[500px] mx-auto border-2 rounded-t-lg border-palette-5'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold text-palette-5 text-center'>Sign Up</h1>
              <form onSubmit={formSubmit} className='w-full flex flex-col py-4'>

                <input onChange={(e) => setUserName(e.target.value)} className='p-3 my-2 bg-palette-1' type='text' placeholder='Username'/>
                <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-palette-1' type='email' placeholder='Email' autoComplete='email'/>
                <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-palette-1' type='password' placeholder='Password' autoComplete='current-password'/>
                <button className='py-3 my-6 rounded font-bold bg-palette-5 text-palette-1 text-xl'> Sign Up </button>
              
              </form>
            </div>
          </div>
          <img className='overflow-hidden mt-20' src={BooksImageFooter} alt='footer books'/>
        </div>
      </div>
    </>
  )
}

export default SignUp;


