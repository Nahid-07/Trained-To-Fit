import React, { useEffect, useState } from 'react';
import Card from '../ContainerCard/Card';
import Nav from '../Nav/Nav';

const Main = () => {
    const [cards,setCards]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className="main-container col-span-8">
                <Nav></Nav>
                <header>
                    <h1 className='text-6xl text-center my-10'><span className='text-orange-600 text-5xl font-semibold'>Train_</span><span className='text-amber-600 font-bold'>ToFit</span></h1>
                </header>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14'>
                {
                    cards.map(card => <Card items={card}></Card>)
                }
                </div>
            </div>
            <div className="details-container col-span-4 bg-slate-200">
                hello cart
            </div>
        </div>
    );
};

export default Main;