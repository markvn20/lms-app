import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import './NavRight.css';
import './NavRight.scss';
import { SlLogout } from 'react-icons/sl';
import { GoGear } from 'react-icons/go';
import { RiQuestionLine } from 'react-icons/ri';
import { BsChevronDown } from "react-icons/bs";
import { useUserAuth, UserContextProvider } from '../../Context/ContextProvider';

const NavRight = () => {
    const [hamburger, setHamburger] = useState(false)
    const [open, setOpen] = useState(false)
    const {logout, auth} = useUserAuth()

    const linkCloseModal = () => {
        // setHamburger(false)
        // setOpen(false)
    }

    return (
        <div className={`NavRight ${hamburger ? "NavContainerActive" : ""}`}>
                <div className='NavTop'>
                    <div className='question navIcons'><RiQuestionLine /></div>
                    <div className='settings navIcons'><GoGear /></div>
                    <div onClick={() => {
                        setHamburger(!hamburger)
                        setOpen(!open)
                    }}  className={`profileImgContainer ${open ? "open" : ""}`}>
                        <div className='imgContainer'>
                            <img src='https://www.nicepng.com/png/detail/383-3832846_read777-studios-i-curate-pokemon-fire-red.png' />
                        </div>
                        <div className='profileArrow'><BsChevronDown /></div>
                        {/* <span>Username</span> */}
                    </div>
                </div>
                <div className='profileImgLargeContainer'>
                    <div className='imgContainer'>
                        <img src='https://www.nicepng.com/png/detail/383-3832846_read777-studios-i-curate-pokemon-fire-red.png' />
                    </div>
                    <div className='username'>Username</div>
                    <div className='major'>Criminal Justice and Criminology</div>
                    <div className='semester'>Fall Semester</div>
                </div>
            {/* <nav className={`${hamburger ? "hamburgerActive" : ""}`}>
                <Link onClick={linkCloseModal} to="/">Home</Link>
                <Link onClick={linkCloseModal} to="/login">Login</Link>
                <Link onClick={linkCloseModal} to="/main">Main</Link>
            </nav> */}
            {/* {
                hamburger ?
                "" 
                :
                <div className='NavSmallContainer'>
                    <div className='NavSmallTop NavSmall'></div>
                    <div className='NavSmallBottom NavSmall'>
                        {auth && <div className='logout navIcons' onClick={logout}><SlLogout /></div>}
                    </div>
                </div> 
            } */}
        </div>
    );
};

export default NavRight;