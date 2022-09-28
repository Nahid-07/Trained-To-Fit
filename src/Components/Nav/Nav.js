import React from 'react';

const Nav = () => {
    return (
        <nav className='h-20 bg-cyan-800 flex justify-center items-center'>
            <a className='mx-3 md:mx-8 text-white font-semibold text-lg' href="#">Home</a>
            <a className='mx-3 md:mx-8 text-white font-semibold text-lg' href="#">About</a>
            <a className='mx-3 md:mx-8 text-white font-semibold text-lg' href="#">Contact</a>
            <a className='mx-3 md:mx-8 text-white font-semibold text-lg' href="#">Login</a>
        </nav>
    );
};

export default Nav