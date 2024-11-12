import { createSlice } from "@reduxjs/toolkit";

const initialCountersState = [
    {
        id: 1,
        value: 0,
    },
    {
        id: 2,
        value: 0,
    },
];

const countersSlice = createSlice({
    name: "counters",
    initialState: initialCountersState,
    reducers: {
        increment: (state, action) => {
            /*         const newCounters = state.map((counter) => {
                if (counter.id === action.payload.id) {
                    return {
                        ...state,
                        value: state.value + 1,
                    };
                }
            });
            return newCounters; */
            const counterIndex = state.findIndex(
                (counter) => counter.id === action.payload.id
            );
            state[counterIndex].value++;
        },
        decrement: (state, action) => {
            const conterIndex = state.findIndex(
                (counter) => counter.id === action.payload.id
            );
            state[conterIndex].value--;
        },
    },
});

const counterReducer = countersSlice.reducer;
export default counterReducer;
export const { increment, decrement } = countersSlice.actions;
