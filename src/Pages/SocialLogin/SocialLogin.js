import React from 'react';
import './sociallogin.css'
import google from '../../images/google-icon.png'
import facebook from '../../images/facebook-icon.png'
import github from '../../images/github-icon.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if(error || errorGit){
        errorElement=( <div>
            <p className='text-danger'>Error: {error?.message} {errorGit?.message}</p>
        </div>)
    }

    if (loading || loadingGit) {
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

    if(user || userGit){
        navigate('/home')
    }

    return (
        <div className='socialLogin text-center'>
            <div className='divider '>
                <div></div>
                <p>or</p>
                <div></div>
            </div>
            {errorElement}
            <div>
                <button onClick={()=>signInWithGoogle()} className='btn btn-info w-75 rounded-pill m-1'>
                    <img className='google-icon' src={google} alt="" />
                    Google Sign In</button>
            </div>
            
            <div>
                <button className='btn btn-info w-75 rounded-pill m-1'>
                    <img className='google-icon' src={facebook} alt="" />
                    Facebook Sign In</button>
            </div>
            <div>
                <button onClick={()=>signInWithGithub()} className='btn btn-info w-75 rounded-pill m-1'>
                    <img className='google-icon' src={github} alt="" />
                    Github Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;