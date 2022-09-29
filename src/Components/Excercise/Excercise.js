import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Excercise = ({count,breaks}) => {
    const notify = () => toast("Congratualtions Your Activity is Completed");
    return (
        <div>
            <h1 className='text-2xl text-center mt-4 font-bold'>Excercise details</h1>
            <div className='mt-6'>
                <div className='flex justify-around border-2 border-slate-400 mx-4  py-4 rounded-xl'>
                    <h4 className='text-2xl font-bold'>Excercise time</h4>
                    <h4 className='text-xl text-gray-500'>{count} Seconds</h4>
                </div>
                <div className='flex justify-around border-2 border-slate-400 mx-4 mt-5 py-4 rounded-xl'>
                    <h4 className='text-2xl font-bold'>Break time</h4>
                    <h4 className='text-xl text-gray-500'>{breaks} Seconds</h4>
                </div>
                <div className='my-5 flex justify-center'>
                <button onClick={notify} className='bg-lime-800 text-white font-semibold text-lg w-9/12 mx-4 mb-4 py-4 rounded-lg'>Activity Completed</button>
                <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Excercise;