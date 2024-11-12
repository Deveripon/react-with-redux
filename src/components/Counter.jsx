import { useDispatch } from "react-redux";
import { decrement, increment } from "../features/counters/countersSlice";

const Counter = ({ data }) => {
    const dispatch = useDispatch();

    function onIncrement() {
        /*      dispatch({
            type: increment,
            payload: {
                id: data.id,
            },
        }); */
        dispatch(increment({ id: data.id }));
    }
    function onDecrement() {
        /*     dispatch({
            type: decrement,
            payload: {
                id: data.id,
            },
        }); */
        dispatch(decrement({ id: data.id }));
    }
    return (
        <div className='flex justify-center items-center flex-col'>
            <h1 className='text-gray-600 mb-5'>Counter {data.id}</h1>
            <div className='count mb-3 w-full text-center flex justify-center items-center p-8 bg-gray-700/30 rounded text-gray-700 font-semibold text-xl'>
                {data.value}
            </div>
            <div className='buttons flex gap-3'>
                <button
                    onClick={onIncrement}
                    className='bg-teal-500 py-2 px-4 rounded-md text-white'>
                    Incriment
                </button>
                <button
                    onClick={onDecrement}
                    className='bg-orange-500 py-2 px-4 rounded-md text-white'>
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;
