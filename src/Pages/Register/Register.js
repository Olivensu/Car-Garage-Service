import React, { useRef, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate()
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
  const [updateProfile, updating, Updateerror] = useUpdateProfile(auth);
  let errorElement;
  if(error){
    errorElement=( <div>
        <p className='text-danger'>Error: {error?.message}</p>
    </div>)
}
if (loading || updating) {
  return <div className='text-center m-5'>
  
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
      <h2 className="text-primary text-center">Please Register</h2>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control  onChange={(e) => setName(e.target.value)}   type="text" name='name' placeholder="Enter Name" required />
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
            <Form.Check  onClick={()=>setAgree(!agree)}  type="checkbox" label="Accept All Terms & Conditions" />
          </Form.Group>
          <Button disabled = {!agree}  onClick={async(event) =>{
             await createUserWithEmailAndPassword(email, password);
             const success = await updateProfile({ name });
             if (success) {
               console.log('Updated profile');
             }
            } 
          } className="w-100" variant="primary" type="submit">
            Register
          </Button>
        </Form>
        {errorElement}
        <p>Already Login? <Link className="text-primary text-decoration-none" to='/login'>Please Login</Link></p>
        
        <SocialLogin></SocialLogin>
      </div>
    </div>
    );
};

export default Register;