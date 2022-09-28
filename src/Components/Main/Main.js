import React from 'react';
import Nav from '../Nav/Nav';

const Main = () => {
    return (
        <div className='grid grid-cols-12'>
            <div className="main-container col-span-8">
                <Nav></Nav>
                <header>
                    <h1 className='text-6xl text-center my-10'><span className='text-orange-600 text-5xl font-semibold'>Train_</span><span className='text-amber-600 font-bold'>ToFit</span></h1>
                </header>
            </div>
            <div className="details-container col-span-4 bg-slate-200 h-screen">
                hello cart
            </div>
        </div>
    );
};

export default Main;