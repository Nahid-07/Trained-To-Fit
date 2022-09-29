const Card = ({ items, add }) => {
  const { name, time_req, img, description, age } = items;
  return (
    <div className="border shadow-lg rounded mx-5">
      <div className="p-2">
        <img className="rounded w-full md:w-96 md:h-96" src={img} alt="" />
      </div>
      <div className="px-2 flex flex-col items-center">
        <h1 className="text-2xl font-semibold my-4">{name}</h1>
        <p className="my-4 text-center text-lg">{description.slice(0, 120)}</p>
        <h2>Time required : {time_req}</h2>
        <h3 className="text-lg font-medium">Age : {age}</h3>
        <div>
          <button
            onClick={() => add(items)}
            className="w-60 bg-cyan-800 hover:bg-teal-700 hover:text-black transition ease-in duration-300 py-3 my-4 rounded-lg text-white font-medium text-lg"
          >
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
