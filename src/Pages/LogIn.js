import React, {useState} from 'react';
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router';
import { BiLockAlt } from 'react-icons/bi'

const LogIn = () => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, logIn } = UserAuth();
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const formSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password)
      navigate('/library');
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  

  return (
    <>
      <div className='w-full h-screen'>
        <div className='fixed w-full px-4 py-60 z-50'>
          <div className='max-w-[450px] h-[450px] mx-auto border-2 rounded-t-lg border-palette-5'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold text-palette-5 text-center'>Sign In</h1>
              <form onSubmit={formSubmit} className='w-full flex flex-col py-4'>

                <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-palette-1' type='text' placeholder='Username or email'/>
                <input onChange={(e) => setPassword(e.target.value)}className='p-3 my-2 bg-palette-1' type='password' placeholder='Password' autoComplete='current-password'/>
                <button className='py-3 my-6 rounded font-bold bg-palette-5 text-palette-1 text-xl'> Sign In </button>
              
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogIn;