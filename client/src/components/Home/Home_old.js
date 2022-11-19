import React from 'react';
import './Home.css'
import { useUserAuth, UserContextProvider } from '../../Context/ContextProvider';
import { motion } from "framer-motion"

const Home = () => {
    const {test} = useUserAuth()
    return (
        <motion.div 
            className="Home"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <div className='HomeLeft HomeSection'>
                <div className='HomeLeftContainer'>
                    <h1>coventic</h1>
                    <div className='HomeLeftContent'>
                        <h3>Welcome to our</h3>
                        <h2>Class<br />Manager</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <button className='learnMore'>Learn More</button>
                    </div>
                </div>
            </div>
            <div className='HomeRight HomeSection'>Home Right</div>
        </motion.div>
    );
};

export default Home;