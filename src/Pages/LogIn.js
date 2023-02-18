import React from 'react';

const LogIn = () => { 
 
  return (
    <>
      <div className='w-full h-screen'>
        <div className='fixed w-full px-4 py-60 z-50'>
          <div className='max-w-[450px] h-[450px] mx-auto border-2 rounded-t-lg border-palette-5'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold text-palette-5 text-center'>Sign In</h1>
              <form className='w-full flex flex-col py-4'>
                
                <input className='p-3 my-2 bg-palette-1' type='text' placeholder='Username or email'/>
                <input className='p-3 my-2 bg-palette-1' type='password' placeholder='Password' autoComplete='current-password'/>
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