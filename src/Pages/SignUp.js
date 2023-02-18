import React from 'react'

const SignUp = () => {


  return (
    <>
      <div className='w-full h-screen'>
        <div className='fixed w-full px-4 py-48 z-50'>
          <div className='max-w-[450px] h-[500px] mx-auto border-2 rounded-t-lg border-palette-5'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold text-palette-5 text-center'>Sign Up</h1>
              <form className='w-full flex flex-col py-4'>

                <input className='p-3 my-2 bg-palette-1' type='text' placeholder='Username'/>
                <input className='p-3 my-2 bg-palette-1' type='email' placeholder='Email' autoComplete='email'/>
                <input className='p-3 my-2 bg-palette-1' type='password' placeholder='Password' autoComplete='current-password'/>
                <button className='py-3 my-6 rounded font-bold bg-palette-5 text-palette-1 text-xl'> Sign Up </button>
              
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp;


