const AddBreak = ({ btnTimer }) => {
  return (
    <div>
      <div className="sticky top-2">
        <h1 className="text-2xl text-center mt-4 font-bold">Add a break</h1>
        <div className="flex flex-col md:flex-row justify-around mt-5">
          <button
            onClick={() => btnTimer(70)}
            className="bg-lime-800 p-3 rounded-lg text-white font-medium"
          >
            70 Seconds
          </button>
          <button
            onClick={() => btnTimer(80)}
            className="bg-lime-800 p-3 rounded-lg text-white font-medium my-2 md:my-0 "
          >
            80 Seconds
          </button>
          <button
            onClick={() => btnTimer(90)}
            className="bg-lime-800 p-3 rounded-lg text-white font-medium"
          >
            90 Seconds
          </button>
          <button
            onClick={() => btnTimer(100)}
            className="bg-lime-800 p-3 rounded-lg text-white font-medium my-2 md:my-0 "
          >
            100 Seconds
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBreak;
