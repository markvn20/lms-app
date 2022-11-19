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
                    Home
                </div>
            </div>
        </motion.div>
    );
};

export default Home;