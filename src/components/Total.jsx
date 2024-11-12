const Total = ({ data }) => {
    const total = data.reduce((result, current) => result + current.value, 0);
    return (
        <div className='total flex justify-center items-center mt-5'>
            <div className='i flex flex-col justify-center items-center '>
                <h1 className='title mb-4'>Total</h1>
                <div className='count w-48 mb-3 text-center flex justify-center items-center p-8 bg-gray-700/30 rounded text-gray-700 font-semibold text-xl'>
                    {total}
                </div>
            </div>
        </div>
    );
};

export default Total;
