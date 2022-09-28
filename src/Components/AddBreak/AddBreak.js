

const AddBreak = () => {
    
    return (
        <div >
            <div className='sticky top-2'>
            <h1 className='text-2xl text-center mt-4'>Add a break</h1>
            <div className='flex flex-col md:flex-row justify-around mt-5'>
                <button className='bg-lime-800 p-3 rounded-lg text-white font-medium'>70 Seconds</button>
                <button className='bg-lime-800 p-3 rounded-lg text-white font-medium my-2 md:my-0 '>80 Seconds</button>
                <button className='bg-lime-800 p-3 rounded-lg text-white font-medium'>90 Seconds</button>
                <button className='bg-lime-800 p-3 rounded-lg text-white font-medium my-2 md:my-0 '>60 Seconds</button>
            </div>
            </div>
        </div>
    );
};

export default AddBreak;