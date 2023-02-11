import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  let errorElement;
  if(error){
    errorElement=( <div>
        <p className='text-danger'>Error: {error?.message}</p>
    </div>)
}
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate('/home')
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }
    return (
        <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center">Please Register</h2>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control   type="text" name='name' placeholder="Enter Name" required />
            <Form.Text className="text-muted">
              We'll never share your Name with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e) => setPassword(e.target.value)} type="password"  placeholder="Password" required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button  onClick={() => createUserWithEmailAndPassword(email, password)}  className="w-100" variant="primary" type="submit">
            Login
          </Button>
        </Form>
        {errorElement}
        <p>Already Registered? <Link className="text-danger text-decoration-none" to='/Login'>Please Login</Link></p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
    );
};

export default Register;