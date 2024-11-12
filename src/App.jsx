import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Total from "./components/Total";
import Posts from "./components/Posts";

const App = () => {
    const counters = useSelector((state) => state.counters);

    return (
        <>
            <div>
                <div className='flex mt-[200px] gap-5 justify-center items-center w-full'>
                    {counters &&
                        counters.map((counter) => (
                            <Counter
                                key={counter.id}
                                data={counter}
                            />
                        ))}
                </div>
                <Total data={counters} />
            </div>
            <Posts />
        </>
    );
};

export default App;
