
import React, { useRef, useState } from "react";
import { Form,Button, Spinner } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import PageTitle from "../Shared/PageTitle";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  const location = useLocation()

  let from = location.state?.from?.pathname || '/'
  const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(
    auth
  );
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  let errorElement;
  if(error|| errorReset){
    errorElement=( <div>
        <p className='text-danger'>Error: {error?.message} {errorReset?.message}</p>
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
      <PageTitle title='Login'></PageTitle>
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
            <Form.Check className={agree? 'text-info' : 'text-danger'} onClick={()=>setAgree(!agree)} type="checkbox" label="Accept All Terms & Conditions"/>
          </Form.Group>
          <Button
          disabled = {!agree}
          onClick={() => {
            if(agree){
              signInWithEmailAndPassword(email, password);
            }
          }}  className="w-100" variant="primary" type="submit">
            Login
          </Button>
        </Form>
        {errorElement}
        <p>New to Genius car? <Link className="text-primary text-decoration-none" to='/register'>Please Register</Link></p>
        <p>Forget Password? <button className="btn btn-link text-primary text-decoration-none" onClick={async () => {
           
          if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
          }
          else{
            toast('please enter your email...')
          }
        }}>Reset Password</button></p>
        <SocialLogin></SocialLogin>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
