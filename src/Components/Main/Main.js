import React, { useEffect, useState } from 'react';
import Card from '../ContainerCard/Card';
import Nav from '../Nav/Nav';
import ContainerSideBar from '../ContainerSidebar/ContainerSideBar';


const Main = () => {
    const [cards,setCards]=useState([]);
    const [time,setTime] = useState([])
    // console.log(time)
    
    // console.log(cards)
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    function add(product){
        const newTime = [...time,product]
        setTime(newTime)
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            {/* aside left container start from here */}
            <aside className="main-container col-span-8">
                <Nav></Nav>
                <header className='flex justify-center items-center'>
                    <h1 className='text-6xl my-10'><span className='text-orange-600 text-5xl font-semibold'>Train_</span><span className='text-amber-600 font-bold'>ToFit</span></h1>
                </header>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14'>
                {
                    cards.map(card => <Card key={card._id} items={card} add={add}></Card>)
                }
                </div>
            </aside>
            {/* aside left container end from here */}

            {/* aside right container start from here */}
            <aside className="details-container col-span-4 bg-slate-200 mx-4 lg:mx-0">
                <ContainerSideBar time={time}></ContainerSideBar>
            </aside>
            {/* aside right container end from here */}

        </div>
    );
};

export default Main;