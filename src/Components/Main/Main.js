import React, { useEffect, useState } from 'react';
import Card from '../ContainerCard/Card';
import Nav from '../Nav/Nav';
import ContainerSideBar from '../ContainerSidebar/ContainerSideBar';

const Main = () => {
    const [cards,setCards]=useState([]);
    console.log(cards)
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            {/* aside left container start from here */}
            <aside className="main-container col-span-8">
                <Nav></Nav>
                <header>
                    <h1 className='text-6xl text-center my-10'><span className='text-orange-600 text-5xl font-semibold'>Train_</span><span className='text-amber-600 font-bold'>ToFit</span></h1>
                </header>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14'>
                {
                    cards.map(card => <Card key={card._id} items={card}></Card>)
                }
                </div>
            </aside>
            {/* aside left container end from here */}

            {/* aside right container start from here */}
            <aside className="details-container col-span-4 bg-slate-200">
                <ContainerSideBar></ContainerSideBar>
            </aside>
            {/* aside right container end from here */}
            
        </div>
    );
};

export default Main;