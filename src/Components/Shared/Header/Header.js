import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
    // get user
    const [user] = useAuthState(auth);

    // handle sign out button
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" className='bg-nav' variant="dark">
            <Container>
                <Navbar.Brand href="/">Task Tracker</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navbar ms-auto">
                        <Link to='/home'>Home</Link>
                        {
                            user ?
                                <>
                                    <Link to='/todo'>To Do</Link>
                                    <Link to='/calendar'>Calendar</Link>
                                    <Link to='/complete'>Complete</Link>
                                    <button className='sign-out' onClick={handleSignOut}>Sign Out</button>
                                </>
                                :
                                <>
                                    <Link to='/signin'><button className='signin-btn'>Sign In</button></Link>
                                    <Link to='/register'><button className='register-btn'>Register</button></Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;