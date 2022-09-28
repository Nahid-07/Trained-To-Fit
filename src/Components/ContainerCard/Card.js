const Card = ({items}) => {
    // console.log(items)
    const {name,time_req,img,description,age} = items;
    return (
        <div className="border shadow-lg rounded mx-5">
            <div className='p-2'>
            <img className='rounded w-full md:w-96 md:h-96' src={img} alt="" />
            </div>
            <div className="px-2 flex flex-col items-center">
                <h1 className="text-2xl font-semibold my-4">{name}</h1>
                <p className="my-4 text-center">{description.slice(0,100)}</p>
                <h2>Time required : {time_req}</h2>
                <h3 className="text-lg font-medium">Age : {age}</h3>
                <div>
                <button className="w-60 bg-teal-700 py-3 my-4 rounded-lg text-white font-medium text-lg">Add</button>
                </div>
            </div>
            
        </div>
    );
};

export default Card;