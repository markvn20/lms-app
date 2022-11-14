import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import { SlLogout } from 'react-icons/sl';
import { useUserAuth, UserContextProvider } from '../../Context/ContextProvider';

const Nav = () => {
    const [hamburger, setHamburger] = useState(false)
    const [open, setOpen] = useState(false)
    const {logout} = useUserAuth()


    return (
        <div className={`Nav ${hamburger ? "NavContainerActive" : ""}`}>
            <div className='HamburgerContainer'>
                <div onClick={() => {
                setHamburger(!hamburger)
                setOpen(!open)
            }}  className={`nav-icon4 ${open ? "open" : ""}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <nav className={`${hamburger ? "hamburgerActive" : ""}`}>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/main">Main</Link>
            </nav>
            {
                hamburger ?
                "" 
                :
                <div className='NavSmallContainer'>
                    <div className='NavSmallTop NavSmall'></div>
                    <hr></hr>
                    <div className='NavSmallBottom NavSmall'>
                        <div className='logout' onClick={logout}><SlLogout /></div>
                    </div>
                </div> 
            }
        </div>
    );
};

export default Nav;