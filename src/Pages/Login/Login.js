
import React, { useRef, useState } from "react";
import { Form,Button, Spinner } from "react-bootstrap";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation()

  let from = location.state?.from?.pathname || '/'
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  let errorElement;
  if(error){
    errorElement=( <div>
        <p className='text-danger'>Error: {error?.message}</p>
    </div>)
}
  if (loading) {
    return <div className='text-center m-5'>
    <Spinner animation="border" variant="primary" />
    <Spinner animation="border" variant="secondary" />
    <Spinner animation="border" variant="success" />
    <Spinner animation="border" variant="danger" />
    <Spinner animation="border" variant="warning" />
    <Spinner animation="border" variant="info" />
    <Spinner animation="border" variant="light" />
    <Spinner animation="border" variant="dark" />
    <Spinner animation="grow" variant="primary" />
    <Spinner animation="grow" variant="secondary" />
    <Spinner animation="grow" variant="success" />
    <Spinner animation="grow" variant="danger" />
    <Spinner animation="grow" variant="warning" />
    <Spinner animation="grow" variant="info" />
    <Spinner animation="grow" variant="light" />
    <Spinner animation="grow" variant="dark" />
  </div>
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
      <h2 className="text-primary text-center">Please login</h2>
      <div>
        <Form>
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
          <Button  onClick={() => signInWithEmailAndPassword(email, password)}  className="w-100" variant="primary" type="submit">
            Login
          </Button>
        </Form>
        {errorElement};
        <p>New to Genius car? <Link className="text-danger text-decoration-none" to='/register'>Please Register</Link></p>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
