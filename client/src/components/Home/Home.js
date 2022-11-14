import React from 'react';
import { useUserAuth, UserContextProvider } from '../../Context/ContextProvider';

const Home = () => {
    const {test} = useUserAuth()
    return (
        <div className='Home'>
            <div className='HomeLeft'>Home Left</div>
            <div className='HomeRight'>Home Right</div>
        </div>
    );
};

export default Home;