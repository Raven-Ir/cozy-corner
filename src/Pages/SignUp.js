import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const SignUp = () => {

  return (
    <>
      
      <div className='bg-image' ></div>
      <div className='d-flex flex-column min-vh-100 justify-content-center align-items-center'>
          <Form className='p-3 border border-4 row-2 rounded border-light'>
            <Form.Group>
              <Form.Label className='fs-3 fw-bold'>Email Address</Form.Label>
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


<Form style={{ width: '18rem' }} className='bg-blue-200'>
<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="Enter email" />
  <Form.Text className="text-muted">
    We'll never share your email with anyone else.
  </Form.Text>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" />
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
  <Form.Check type="checkbox" label="Check me out" />
</Form.Group>
<Button variant="primary" type="submit">
  Submit
</Button>
</Form>