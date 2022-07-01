import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import login from '../../../assets/login.jpg';
import './Login.css';

const Login = () => {


    // get email and password state
    const emailRef = useRef('');
    const passwordRef = useRef('');


    // page redirect handle after get user
    const navigate = useNavigate();

    // sign in user hook
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    // password reset email sent hook
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);



    // loading page
    if (loading || sending) {
        //  return <Loading></Loading>
    }


    // error handle
    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'><b>Error: {error?.message}</b></p>
    }


    // sign in the registered user with email and password
    const handleUserSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // sign in user
        signInWithEmailAndPassword(email, password);
    }


    // navigate to Register page
    const navigateRegister = event => {
        navigate('/register');
    }


    // reset password email sent confirmed by using toast
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }


    // after get verified user redirect to the previous page
    if (user) {
        navigate('/home');
    }


    return (
        <section className='sign-in container'>
            <div className='image-container'>
                <img src={login} alt="" />
            </div>
            <div className='form-container'>
                <div>
                    <h1 className='form-title my-5'>Sign in</h1>
                    <form onSubmit={handleUserSignIn}>
                        <div className='input-group'>
                            <input ref={emailRef} type="email" name="email" placeholder='Enter Email' required />
                        </div>
                        <div className='input-group'>
                            <input ref={passwordRef} type="password" name="password" id="" placeholder='Enter Password' required />
                        </div>
                        <p>{loading && 'Loading...'}</p>
                        {errorElement}
                        <input className='form-submit' type="submit" value="Sign in" />
                    </form>
                    <p>
                        New to Task Tracker? <Link className='form-link' to="/register" onClick={navigateRegister}>Create New Account</Link>
                    </p>
                    <p>Forget Password? <button className='form-link btn pe-2 ps-0 pb-2' onClick={resetPassword}>Reset Password</button></p>
                </div>
            </div>
        </section>
    );
};

export default Login;