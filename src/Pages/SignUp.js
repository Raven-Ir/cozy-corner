import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const SignUp = () => {

  return (
    <>
      
      <div className='bg-image' ></div>
      <div className='d-flex flex-column min-vh-100 justify-content-center align-items-center'>
          <h1 className='p-2 fs-1 fw-bold'>Sign Up</h1>
          <Form className='p-3 border border-4 row-2 rounded' fontFamily = "Source Sans Pro" style={{borderColor: "#DDB892"}}>
            <Form.Group>
              <Form.Label className='fs-3 fw-bold '>Email Address</Form.Label>
              <Form.Control type='email' placeholder='Enter your email' />
              <Form.Text className='text-muted'>
                We will not share your email with anyone else!
              </Form.Text>
            </Form.Group>
              
            <Form.Group>
              <Form.Label className='fs-3 fw-bold'>Password</Form.Label>
              <Form.Control type='password' placeholder='Enter a password' />
            </Form.Group>
            <Button variant='light' className='mt-3' type='submit'>Sign Up</Button>
          </Form>
      </div> 
      
    </>
  )
}

export default SignUp;