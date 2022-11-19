import React from 'react';
import { motion } from 'framer-motion';

const Main = () => {
    return (
        <motion.div
            className='Main'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            Main
        </motion.div>
    );
};

export default Main;