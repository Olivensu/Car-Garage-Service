
import React, { useRef } from "react";
import { Form,Button } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate()

    const handleSubmit = e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }

    const NavigateRegister =(event)=>{
        navigate('/register'); 
    }
     
  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-primary text-center">Please login</h2>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref = {emailRef} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button className="w-100" variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <p>New to Genius car? <Link className="text-danger text-decoration-none" to='/register' onClick={NavigateRegister}>Please Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
